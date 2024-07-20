// SpotifyEmbed.js

import React from 'react';

const SpotifyEmbed = () => {
    return (
        <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/7MRHhuY6xpdjXKJchN0win?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>

        // <iframe 
        //     width="100%" 
        //     height="166" 
        //     scrolling="no" 
        //     frameborder="no" 
        //     allow="autoplay" 
        //     src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1019285710&color=%23000000&auto_play=true&hide_related=false&hide_comments=false&amp_user=true&show_reposts=false&hide_teaser=true"
        // ></iframe>
    );
};

export default SpotifyEmbed;
