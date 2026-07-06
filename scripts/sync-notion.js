const axios = require('axios');
const fs = require('fs');
const path = require('path');

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const DATA_FILE = path.join(__dirname, '../src/data/timelineData.json');

const notionClient = axios.create({
  baseURL: 'https://api.notion.com/v1',
  headers: {
    'Authorization': `Bearer ${NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  }
});

async function getNotionDatabase() {
  try {
    console.log('📡 Fetching Notion database...');
    const response = await notionClient.post(`/databases/${DATABASE_ID}/query`, {
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    });

    console.log(`✅ Found ${response.data.results.length} entries in Notion`);
    return response.data.results;
  } catch (error) {
    console.error('❌ Error fetching Notion database:', error.message);
    if (error.response?.data) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

function parseNotionPage(page) {
  const props = page.properties;
  
  const dateObj = props.Date?.date;
  const date = dateObj ? dateObj.start : new Date().toISOString().split('T')[0];
  
  const title = props.Title?.title[0]?.plain_text || 'Untitled';
  
  const itemsText = props.Items?.rich_text[0]?.plain_text || '';
  const items = itemsText
    .split(/[,\n]/)
    .map(item => item.trim())
    .filter(item => item.length > 0);
  
  return { date, title, items };
}

async function updateTimelineData(entries) {
  console.log(`📥 Processing ${entries.length} entries from Notion...`);
  
  // Create fresh timeline data from Notion (REPLACE, don't merge)
  const timelineDataMap = {};
  
  entries.forEach((entry, index) => {
    const parsed = parseNotionPage(entry);
    
    // Group by date
    if (!timelineDataMap[parsed.date]) {
      timelineDataMap[parsed.date] = {
        date: parsed.date,
        align: index % 2 === 0 ? 'right' : 'left',
        entries: []
      };
    }
    
    // Add entry (don't worry about duplicates, Notion is source of truth)
    timelineDataMap[parsed.date].entries.push({
      title: parsed.title,
      items: parsed.items
    });
  });
  
  // Convert to array and sort by date descending
  const timelineData = Object.values(timelineDataMap).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  
  // Reindex align property based on final order
  timelineData.forEach((item, index) => {
    item.align = index % 2 === 0 ? 'right' : 'left';
  });
  
  // Write updated data (completely replaces old file)
  fs.writeFileSync(DATA_FILE, JSON.stringify(timelineData, null, 2));
  console.log(`✅ Timeline updated successfully with ${timelineData.length} dates!`);
  console.log(`📊 Total entries: ${timelineData.reduce((sum, day) => sum + day.entries.length, 0)}`);
}

async function main() {
  console.log('🔄 Syncing Notion database to timeline...\n');
  const pages = await getNotionDatabase();
  
  if (pages.length === 0) {
    console.log('⚠️  No entries found in Notion database');
    return;
  }

  await updateTimelineData(pages);
}

main().catch(error => {
  console.error('❌ Sync failed:', error);
  process.exit(1);
});
