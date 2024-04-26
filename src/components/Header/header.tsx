import React from 'react';
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import Navigation from "@/components/Header/navigation";


export default function Header() {
    return (
        <header className='h-28 w-full flex flex-row justify-center border-b-2 border-b-muted-foreground shadow-lg'>
            <MaxWidthWrapper className='flex flex-row justify-between items-center'>
                <div className={''}>
                    <h4 className={''}><span className={'text-primary'}>Pan </span> Paweł</h4>
                    <h5>Blog Osobisty</h5>
                </div>
                <img src='images/me_glasses_3.png' className={'h-full w-auto'}/>
                <Navigation/>
            </MaxWidthWrapper>
        </header>
    )
}