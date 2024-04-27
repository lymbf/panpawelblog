"use client"

import React, {useState} from 'react';
import Link from "next/link";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";



export default function Navigation() {
    const [dropActive, setDropActive] = useState<boolean>(false)
    return (
        <ul className = 'flex flex-row font-medium text-foreground' >
            <Link href={'/'} className={'flex items-center mr-12 hover:opacity-70'}
                  onClick={()=>{setDropActive(!dropActive)}}
            >
                Artykuły
                <ChevronDown size = {'18'} className={cn('transition-all', dropActive && '-rotate-180')}/>
            </Link>
            <Link href={'/about'} className={'hover:opacity-70'}>O mnie</Link>
        </ul>
    )
}