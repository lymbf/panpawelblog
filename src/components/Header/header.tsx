import React from 'react';
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import Navigation from "@/components/Header/navigation";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/Header/mobileNav";


export default function Header() {
    return (
        <header className='sticky top-0 bg-background z-50 h-28 w-full flex flex-row justify-center border-b-2 border-b-muted-foreground shadow-lg mb-12'>
            <MaxWidthWrapper className='flex flex-row justify-between items-center'>
                <Link href = {'/'} className={'hover:opacity-70'}>
                    <h4 className={''}><span className={'text-primary'}>Pan </span> Paweł</h4>
                    <h5>Blog Osobisty</h5>
                </Link>
                <Image alt = 'Myself in glassessss' width = {385} height = {345} src='/images/me_glasses_3.png' className={'h-full w-auto'}/>
                <Navigation className={'hidden sm:flex'}/>
                <MobileNav className={'flex sm:hidden'}/>
            </MaxWidthWrapper>
        </header>
    )
}