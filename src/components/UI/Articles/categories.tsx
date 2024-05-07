import React, {ReactNode} from 'react';
import useCategoriesController from "@/application/controllers/categoriesController";


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
                    return <div className = 'uppercase flex justify-center items-center leading-3 text-xs md:text-base mx-2 lg:mx-4 my-0'>
                        {cat.name}
                    </div>
                })}
            </div>
        </div>
    )
}