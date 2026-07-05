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
    const response = await notionClient.post(`/databases/${DATABASE_ID}/query`, {
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching Notion database:', error.message);
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
  // Load existing timeline data or create new
  let timelineData = [];
  
  if (fs.existsSync(DATA_FILE)) {
    const content = fs.readFileSync(DATA_FILE, 'utf-8');
    timelineData = JSON.parse(content);
  }

  // Process each Notion entry
  entries.forEach(entry => {
    const parsed = parseNotionPage(entry);
    
    // Check if date already exists
    let dateEntry = timelineData.find(d => d.date === parsed.date);
    
    if (!dateEntry) {
      dateEntry = {
        date: parsed.date,
        align: timelineData.length % 2 === 0 ? 'right' : 'left',
        entries: []
      };
      timelineData.push(dateEntry);
    }

    // Check if title already exists for this date
    if (!dateEntry.entries.find(e => e.title === parsed.title)) {
      dateEntry.entries.push({
        title: parsed.title,
        items: parsed.items
      });
    }
  });

  // Sort by date descending
  timelineData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Write updated data
  fs.writeFileSync(DATA_FILE, JSON.stringify(timelineData, null, 2));
  console.log('✅ Timeline updated successfully!');
}

async function main() {
  console.log('🔄 Syncing Notion database to timeline...');
  const pages = await getNotionDatabase();
  
  if (pages.length === 0) {
    console.log('No entries found in Notion database');
    return;
  }

  await updateTimelineData(pages);
}

main().catch(error => {
  console.error('❌ Sync failed:', error);
  process.exit(1);
});