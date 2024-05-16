import React from 'react';
import useArticlesController from "@/application/controllers/articlesController";


export default async function Page({params}: { params: { slug: string } }) {
    const {getArticle} = useArticlesController();
    const article = await getArticle(parseInt(params.slug))
    return (
        <div className='Page'>
            {article && article.title}
        </div>
    )
}