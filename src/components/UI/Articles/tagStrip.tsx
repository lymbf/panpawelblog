import React, {ReactNode} from 'react';
import {Category, Tag} from "@/application/interfaces/article";
import {ChevronRight} from "lucide-react";


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
        <div className='flex flex-row mb-3 items-center h-8'>
            <h2 className={' my-0 font-normal tracking-wider text-[22px] mr-2 flex flex-row  p-0 leading-7 items-center text-foreground uppercase'}>
                {category.name}
            </h2>
            <ul className={'flex flex-row items-center h-full'}>
                <ChevronRight size = {22} className={'-mt-1 mr-2'}/>
                {tags && tags.map((t, i):ReactNode=>{
                    return <li className={'flex capitalize tracking-wider flex-row items-center text-[14px] text-slate-400 font-normal'}>
                        {t.name}
                        {i!=tags.length-1 && <div className = 'ml-2 mr-2  flex items-center justify-center'>|</div>}
                    </li>
                })}
            </ul>

        </div>
    )
}