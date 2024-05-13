import React from 'react';
import TagStrip from "@/components/UI/Articles/tagStrip";
import {Article} from "@/application/interfaces/article";
import Image from "next/image";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/UI/button";


export default function ArticleLG({article, currentCatId}: { article: Article, currentCatId?: number }) {
    console.log('url: ', article.image_link)
    return (
        <div className='ArticleLG pb-10 border-b-2 border-b-accent mb-10'>
            <TagStrip categories={article.categories} currentCatId={currentCatId || null} tags={article.tags}/>
            <Image className={'rounded-3xl mb-3'} src={`${process.env.BASE_URL}${article.image_link}`}
                   alt={`${article.title}`} width={642} height={428}/>
            <h1 className='mb-1 text-foreground'>{article.title}</h1>
            <div
                className='text-slate-400 font-normal text-base tracking-wider mb-4'>{new Date(article.createdAt).toLocaleString()}</div>
            <div className={'max-h-12 overflow-hidden'}>{<BlocksRenderer content={article.body}/>}</div>
            <div className={'flex justify-end text-sm mt-3 font-bold'}>
                <Link href='/article/[slug]' as={`/article/${article.id}`}
                      className={cn(buttonVariants({variant: 'ghost'}), 'font-bold tracking-wide')}>Czytaj więcej..</Link>
            </div>
        </div>
    )
}