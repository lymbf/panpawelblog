import React from 'react';
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import Categories from "@/components/UI/Articles/categories";
import SearchBar from "@/components/UI/Other/searchBar";
import useArticlesController from "@/application/controllers/articlesController";
import TagStrip from "@/components/UI/Articles/tagStrip";
import MostRead from "@/components/UI/Articles/mostRead";
import ArticleLG from "@/components/UI/Articles/articleLG";


export default async function Page({params}:{params: { slug: string}}) {
    const {getArticles} = useArticlesController();
    const articles = await getArticles(20, 1,  parseInt( params.slug))
    return (
        <div className = 'Page'>
            <MaxWidthWrapper className = 'p-0 md:px-0 flex flex-col md:flex-row md:justify-between md:items-center'>
                <Categories className = 'max-w-3/4 '/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>
            <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'}>
                <div className='max-w-screen-sm w-full mr-12'>
                    {articles && articles.map((a)=>{

                        return <ArticleLG article={a} currentCatId={parseInt(params.slug)}/>
                    })}
                </div>
                <MostRead data={articles} className={''}/>
            </MaxWidthWrapper>
        </div>
    )
}