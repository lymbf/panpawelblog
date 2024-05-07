import React, {ReactNode} from 'react';
import useCategoriesController from "@/application/controllers/categoriesController";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/UI/button";


export default async function Categories({className}:{className?:string}) {

    const {getCategories} = useCategoriesController()
    const categories = await getCategories();

    return (
        <div className = {`flex flex-row py-3 border-b-gray-300 border-b-2 ${className}`}>
            <div className = 'font-normal text-xl md:text-2xl w-auto flex items-center'>
                Kategorie:
            </div>
            <div className = 'flex flex-row flex-wrap items-center'>
                {categories && categories.map((cat, i):ReactNode=>{
                    return <Link href = '/articles/[slug]' as = {`/articles/${cat.id}`} className = {cn(buttonVariants({variant: 'ghost'}), 'uppercase flex justify-center items-center leading-3 text-xs md:text-base mx-2 lg:mx-4 my-0 font-normal hover:opacity-70')}>
                        {cat.name}
                    </Link>
                })}
            </div>
        </div>
    )
}