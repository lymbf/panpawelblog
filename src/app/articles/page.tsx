import React from 'react';
import Categories from "../../components/UI/Articles/categories";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import SearchBar from "@/components/UI/Other/searchBar";
import useArticlesController from "@/application/controllers/articlesController";
import MostRead from "@/components/UI/Articles/mostRead";
import TagStrip from "@/components/UI/Articles/tagStrip";
import ArticleLG from "@/components/UI/Articles/articleLG";


export default async function Page() {
    const {getArticles} = useArticlesController();
    const articles = await getArticles({paginationPage:1, paginationSize: 10})

    return (
        <div className='flex flex-col'>
            <MaxWidthWrapper
                className='px-0 md:px-0 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center'>
                <Categories className='max-w-screen-sm w-full'/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>
            <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'}>
                <div className=' max-w-screen-sm w-full mr-0 sm:mr-10 md:mr-16'>
                    {articles && articles.map((a)=>{
                        return <ArticleLG key = {a.title} article={a}/>
                    })}
                </div>
                <MostRead data={articles} className={'max-w-[220px] lg:max-w-[420px]'}/>
            </MaxWidthWrapper>

        </div>
    )
}