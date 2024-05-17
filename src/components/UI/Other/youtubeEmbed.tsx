import React from 'react';


export default function YoutubeEmbed({url}: { url: string }) {
    return (
        <iframe className = {'aspect-video w-full'} src={url.split('watch?v=').map((el, i) => {
            if (i === 0) return el + 'embed/';
            else return el
        }).join('')}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
    )
}