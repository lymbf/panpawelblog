import React from 'react';
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import Categories from "@/components/UI/Articles/categories";
import SearchBar from "@/components/UI/Other/searchBar";
import useArticlesController from "@/application/controllers/articlesController";
import TagStrip from "@/components/UI/Articles/tagStrip";
import MostRead from "@/components/UI/Articles/mostRead";
import ArticleLG from "@/components/UI/Articles/articleLG";


export default async function Page({params}: { params: { slug: string } }) {
    const {getArticles} = useArticlesController();
    const articles = await getArticles({
        paginationSize: 20, paginationPage: 1, categoryId: parseInt(params.slug)
    })
    return (
        <div className='Page'>
            <MaxWidthWrapper
                className='px-0 md:px-0 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center'>
                <Categories className='max-w-screen-sm w-full' current = {parseInt(params.slug)}/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>
            <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'}>
                <div className=' max-w-screen-sm w-full mr-0 sm:mr-10 md:mr-16'>
                    {articles && articles.map((a) => {
                        return <ArticleLG article={a}/>
                    })}
                </div>
                <MostRead data={articles} className={'max-w-[220px] lg:max-w-[420px]'}/>
            </MaxWidthWrapper>
        </div>
    )
}