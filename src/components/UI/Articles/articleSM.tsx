import React from 'react';
import {Article} from "@/application/interfaces/article";
import Image from "next/image";
import Link from "next/link";


export default function ArticleSM({article, className}: { article: Article, className?: string }) {
    return (
        <Link href={`/article/[slug]`} as={`/article/${article.id}`}>
            <div className={`relative group mb-6 ${className} `}>
                <Image className={'rounded-2xl'} src={`${process.env.BASE_URL}${article.image_link}`}
                       alt={`${article.title}`}
                       width={180} height={120}
                />
                <div
                    className={`hidden group-hover:flex bg-black bg-opacity-80 p-3 rounded-2xl w-full h-full absolute top-0 left-0 justify-center items-center font-bold text-center overflow-hidden`}>
                    {article.title}
                </div>
            </div>
        </Link>
    )
}