import React, {ReactNode} from 'react';
import useCategoriesController from "@/application/controllers/categoriesController";


export default async function Categories() {

    const {getCategories} = useCategoriesController()
    const categories = await getCategories();

    return (
        <div className = 'Categories'>
            {categories && categories.map((cat, i):ReactNode=>{
               return <div>{cat.name}</div>
            })}
        </div>
    )
}