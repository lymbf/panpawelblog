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
            <MaxWidthWrapper className = 'px-0 md:px-0 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center'>
                <Categories className = 'max-w-3/4 '/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>
            <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'} >
                <div className = ''>
                    asd
                </div>
                <div className = 'flex flex-col items-center'>
                    <h3 className = ''>
                        Najczęściej czytane:
                    </h3>
                </div>
            </MaxWidthWrapper>

        </div>
    )
}