import React from 'react';
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import Categories from "@/components/UI/Articles/categories";
import SearchBar from "@/components/UI/Other/searchBar";
import useArticlesController from "@/application/controllers/articlesController";


export default function Page({params}:{params: { slug: string}}) {
    const {getArticles} = useArticlesController();
    getArticles(parseInt(params.slug)).then(r=>console.log('articles ccontr res: ', r))
    return (
        <div className = 'Page'>
            <MaxWidthWrapper className = 'p-0 md:px-0 flex flex-col md:flex-row md:justify-between md:items-center'>
                <Categories className = 'max-w-3/4 '/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>
        </div>
    )
}