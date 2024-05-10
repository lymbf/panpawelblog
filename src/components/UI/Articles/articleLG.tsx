import React from 'react';
import TagStrip from "@/components/UI/Articles/tagStrip";
import {Article} from "@/application/interfaces/article";
import Image from "next/image";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";


export default function ArticleLG({article}:{article:Article}) {
    console.log('url: ', article.image_link)
    return (
        <div className = 'ArticleLG'>
            <TagStrip categories={article.categories}/>
            <Image src={`${process.env.BASE_URL}${article.image_link}`} alt={`${article.title}`} width={642} height={428}/>
            <h1>{article.title}</h1>
            <div className = ''>{article.createdAt}</div>
            {<BlocksRenderer content={article.body}/>}
        </div>
    )
}