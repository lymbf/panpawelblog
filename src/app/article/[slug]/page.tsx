import React from 'react';
import useArticlesController from "@/application/controllers/articlesController";
import Categories from "@/components/UI/Articles/categories";
import TagStrip from "@/components/UI/Articles/tagStrip";
import {Article} from "@/application/interfaces/article";
import DateLine from "@/components/UI/Other/dateLine";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import RecentArticles from "@/components/UI/Articles/recentArticles";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";


export default async function Page({params}: { params: { slug: string } }) {
    const {getArticle} = useArticlesController();
    const article: Article | null = await getArticle(parseInt(params.slug))
    return (
        <div className='flex flex-row'>
            {article &&
                <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'}>
                    <div className={'max-w-screen-md w-full mr-0 sm:mr-10 md:mr-16'}>
                        <TagStrip categories={article.categories} tags={article.tags}/>
                        <h1 className={'text-[38px] mb-2'}>{article.title}</h1>
                        <DateLine timestamp={article.createdAt}/>
                        <Image src={`${process.env.BASE_URL}${article.image_link}`} alt={`${article.title}`}
                               width={880} height={587} className={'rounded-3xl mb-6'}/>
                        <BlocksRenderer content={article.body}/>
                    </div>
                    <RecentArticles className={''}/>
                </MaxWidthWrapper>
            }

        </div>
    )
}