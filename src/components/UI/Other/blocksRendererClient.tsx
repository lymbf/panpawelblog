"use client";
import React from 'react';
import {BlocksContent, BlocksRenderer} from "@strapi/blocks-react-renderer";
import YoutubeEmbed from "@/components/UI/Other/youtubeEmbed";
import Link from "next/link";


export default function BlocksRendererClient({content}:{readonly content: BlocksContent}) {
    return (
        <BlocksRenderer content={content}
            blocks = {{
                link: ({children, url})=>{
                    if(url.includes('https://www.youtube.com')) return <YoutubeEmbed url={url}/>
                    else return <Link className={'text-muted-foreground font-light'} href = {url} >{children}</Link>
                }
            }}
        />
    )
}