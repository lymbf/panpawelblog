import React from 'react';
import Categories from "../../components/UI/Articles/categories";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import SearchBar from "@/components/UI/Other/searchBar";


export default function Page() {
    return (
        <div className = 'flex flex-col'>
            <MaxWidthWrapper className = 'p-0 md:px-0 flex flex-col md:flex-row md:justify-between'>
                <Categories className = 'max-w-3/4 '/>
                <SearchBar className={''}/>
            </MaxWidthWrapper>

        </div>
    )
}