import React from 'react';
import {Category, Tag} from "@/application/interfaces/article";


export default function TagStrip({categories, tags, currentCatId}: {
    categories: Category[],
    tags?: Tag[],
    currentCatId?:number|null
}) {
    let category = currentCatId ? categories.filter((c) => {
            return currentCatId === c.id
        }) [0]
        : categories[0]
    return (
        <div className=''>
            {category.name}
        </div>
    )
}