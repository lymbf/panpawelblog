import React, {ReactNode} from 'react';
import useCategoriesController from "@/application/controllers/categoriesController";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/UI/button";


export default async function Categories({className, current}: { className?: string, current?:number }) {

    const {getCategories} = useCategoriesController()
    const categories = await getCategories();

    return (
        <div className={`flex flex-col items-center sm:flex-row py-3 border-b-accent border-b-2 ${className}`}>
            <div className='font-normal text-xl md:text-2xl w-auto flex items-center px-0'>
                <h3>Kategorie:</h3>
            </div>
            <div className='flex flex-row flex-wrap flex-1 items-center justify-center sm:justify-between w-full'>
                {categories && categories.map((cat, i): ReactNode => {
                    return <Link href='/articles/[slug]' as={`/articles/${cat.id}`}
                                 className={cn(buttonVariants({variant: 'ghost'}),
                                     'text-muted-foreground uppercase flex justify-center items-center leading-3 text-xs sm:text-base mx-0  font-normal',
                                     cat.id===current && 'text-foreground'
                                 )}>
                        {cat.name}
                    </Link>
                })}
            </div>
        </div>
    )
}