import React, {ReactNode} from 'react';
import useArticlesController from "@/application/controllers/articlesController";
import TagStrip from "@/components/UI/Articles/tagStrip";
import {Article} from "@/application/interfaces/article";
import DateLine from "@/components/UI/Other/dateLine";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import RecentArticles from "@/components/UI/Articles/recentArticles";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import BlocksRendererClient from "@/components/UI/Other/blocksRendererClient";

export default async function Page({params}: { params: { slug: string } }) {
    const {getArticle} = useArticlesController();
    const article: Article | null = await getArticle(parseInt(params.slug))

    return (
        <div className='flex flex-row'>
            {article &&
                <MaxWidthWrapper className={'flex flex-row justify-between px-0 md:px-0 mt-12'}>
                    <div className={'max-w-[960px] w-full mr-0 sm:mr-10 md:mr-10'}>
                        <TagStrip categories={article.categories} tags={article.tags}/>
                        <h1 className={'text-[38px] mb-2 leading-[44px]'}>{article.title}</h1>
                        <DateLine timestamp={article.createdAt}/>
                        <Image src={`${process.env.BASE_URL}${article.image_link}`} alt={`${article.title}`}
                               width={960} height={640} className={'rounded-3xl mb-6'}/>
                        <div className={`[&>h1]:my-4 [&>h1]:text-2xl [&>p]:mb-4 
                            [&>blockquote]:text-2xl
                            [&>blockquote]:bg-slate-800
                            [&>blockquote]:p-3
                            [&>blockquote]:border-l-4
                            [&>blockquote]:border-l-accent-foreground`}
                        >
                            <BlocksRendererClient content={article.body}/>
                        </div>
                    </div>
                    <RecentArticles className={''}/>
                </MaxWidthWrapper>
            }

        </div>
    )
}