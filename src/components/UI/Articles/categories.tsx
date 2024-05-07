import React, {ReactNode} from 'react';
import useCategoriesController from "@/application/controllers/categoriesController";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/UI/button";


export default async function Categories({className}: { className?: string }) {

    const {getCategories} = useCategoriesController()
    const categories = await getCategories();

    return (
        <div className={`flex flex-col sm:flex-row py-3 border-b-accent border-b-2 ${className}`}>
            <div className='font-normal text-xl md:text-2xl w-auto flex items-center px-2'>
                Kategorie:
            </div>
            <div className='flex flex-row flex-wrap items-center w-full'>
                {categories && categories.map((cat, i): ReactNode => {
                    return <Link href='/articles/[slug]' as={`/articles/${cat.id}`}
                                 className={cn(buttonVariants({variant: 'ghost'}),
                                     'px-2 sm:px-2 lg:px-4 xl:px-5 uppercase flex justify-center items-center leading-3 text-xs md:text-base mx-0  xl:mx-4 my-0 font-normal')}>
                        {cat.name}
                    </Link>
                })}
            </div>
        </div>
    )
}