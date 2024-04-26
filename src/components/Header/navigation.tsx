import React from 'react';
import Link from "next/link";
import {ChevronDown} from "lucide-react";



export default function Navigation() {
    return (
        <ul className = 'flex flex-row font-medium text-foreground' >
            <Link href={'/'} className={'flex items-center mr-12'}>Artykuły<ChevronDown size = {'18'}/></Link>
            <Link href={'/about'}>O mnie</Link>
        </ul>
    )
}