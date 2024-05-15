import React from 'react';
import Image from "next/image";
import {Article} from "@/application/interfaces/article";
import Link from "next/link";


export default function ArticleMD({article}: { article: Article }) {
    return (
        <div className='flex flex-row mb-6'>
            <div className={'flex flex-col'}>
                <Link href={'/article/[slug]'} as={`/article/${article.id}`}>
                    <Image className={'rounded-2xl hover:opacity-70'} src={`${process.env.BASE_URL}${article.image_link}`}
                           alt={article.title || ''} width={190} height={126}/>
                </Link>
                <div className={'w-full flex flex-row justify-center'}>{article.tags && article.tags.map((t, i) => {
                    return <div
                        className={'mt-1.5 tracking-wider text-slate-500 text-[10px] capitalize flex flex-row'}>{t.name}
                        {article.tags && i != article.tags.length - 1 &&
                            <div className='ml-2 mr-2  flex items-center justify-center'>|</div>}</div>
                })}</div>
            </div>
            <div className={'w-[198px] ml-5 flex flex-col justify-center pb-5'}>
                <div className={'text-sm uppercase text-muted-foreground mb-2'}>
                    {article.categories[0].name}
                </div>
                <Link href={'/article/[slug]'} as={`/article/${article.id}`}>
                    <h2 className={'text-base leading-5 mb-2 hover:opacity-70'}>
                        {article.title}
                    </h2>
                </Link>
                <div className={'text-[10px] text-slate-500 tracking-wider font-normal'}>
                    {new Date(article.createdAt).toLocaleString()}
                </div>
            </div>
        </div>
    )
}