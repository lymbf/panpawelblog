import React from 'react';
import Categories from "../../components/UI/Articles/categories";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import SearchBar from "@/components/UI/Other/searchBar";
import useArticlesController from "@/application/controllers/articlesController";


export default function Page() {
    const {getArticles} = useArticlesController();
    getArticles().then(r=>console.log('articles ccontr res: ', r))
    return (
        <div className = 'flex flex-col'>
            <MaxWidthWrapper className = 'p-0 md:px-0 flex flex-col md:flex-row md:justify-between md:items-center'>
                <Categories className = 'max-w-3/4 '/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>

        </div>
    )
}