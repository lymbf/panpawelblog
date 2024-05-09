import React from 'react';
import Categories from "../../components/UI/Articles/categories";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import SearchBar from "@/components/UI/Other/searchBar";
import useArticlesController from "@/application/controllers/articlesController";
import MostRead from "@/components/UI/Articles/mostRead";


export default async function Page() {
    const {getArticles} = useArticlesController();
    const articles = await getArticles()
    return (
        <div className='flex flex-col'>
            <MaxWidthWrapper
                className='px-0 md:px-0 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center'>
                <Categories className='max-w-screen-sm w-full'/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>
            <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'}>
                <div className='bg-amber-300 max-w-screen-sm w-full mr-12'>
                    asd
                </div>
                <MostRead data={articles} className={''}/>
            </MaxWidthWrapper>

        </div>
    )
}