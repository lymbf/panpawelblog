import React from 'react';
import {Article} from "@/application/interfaces/article";
import ArticleSM from "@/components/UI/Articles/articleSM";
import useArticlesController from "@/application/controllers/articlesController";


export default async function RecentArticles({className}:{className:string}) {
    const {getArticles} = useArticlesController();
    const articles = await getArticles({});
    return (
        <div className={`hidden sm:flex flex-col items-center sm:w-[220px] max-w-[220px] ${className}`}>
            <h3 className='mb-8 text-[18px] lg:text-[20px] xl:text-[24px] text-center'>
                Najnowsze wpisy:
            </h3>
            {articles && articles.map((a)=>{
                return <ArticleSM article={a}/>
            })}
        </div>
    )
}