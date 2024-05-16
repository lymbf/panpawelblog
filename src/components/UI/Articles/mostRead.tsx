import React from 'react';
import {getData} from "@/application/hooks/fetch";
import {Article} from "@/application/interfaces/article";
import ArticleMD from "@/components/UI/Articles/articleMD";


export default async function MostRead({data, className}: { data: Article[] | null, className?: string }) {
    let articles = data && data.filter((a) => {
        return !a.newest
    }).sort((a, b) => {
        return b.views - a.views
    }).slice(0, 3)
    return (
        <div className={`hidden sm:flex flex-col items-center lg:items-start w-full ${className}`}>
            <h3 className='mb-8 text-[22px] lg:text-[28px]'>
                Najczęściej czytane:
            </h3>
            {articles && articles.map((a) => {
                return <ArticleMD article={a}/>
            })}
        </div>
    )
}