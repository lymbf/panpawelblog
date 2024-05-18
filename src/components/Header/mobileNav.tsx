"use client";

import React, {useState} from 'react';
import Link from "next/link";

export default function MobileNav({className}: { className?: string }) {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    return (
        <div className={`${className}`}>
            <div onClick={(e) => {
                setShowDropDown(true)
            }} className='h-8 w-12 flex flex-col justify-between items-center ml-2'>
                <div className={'w-full h-1 bg-foreground'}></div>
                <div className={'w-3/4 h-[2px] bg-foreground'}></div>
                <div className={'w-full h-1 bg-foreground'}></div>
            </div>
            {showDropDown &&
                <>
                    <div
                        className={'flex flex-col items-center justify-center bg-opacity-95 fixed top-0 left-0 h-1/2 bg-background w-full z-40 animate-in fade-in-10 slide-in-from-top-5'}>
                        <Link href={'/articles'} onClick={()=>{setShowDropDown(false)}} className={'hover:opacity-70 my-4 uppercase font-bold text-2xl tracking-wider'}>Artykuły</Link>
                        <Link href={'/about'}  onClick={()=>{setShowDropDown(false)}} className={'hover:opacity-70 my-4 uppercase font-bold text-2xl tracking-wider'}>O mnie</Link>
                    </div>
                    <div className={'w-full h-full bg-black bg-opacity-80 z-20 fixed top-0 left-0'}
                        onClick = {(e)=>{setShowDropDown(false)}}
                    >
                    </div>
                </>

            }
        </div>
    )
}