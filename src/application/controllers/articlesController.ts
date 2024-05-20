import {getData} from "@/application/hooks/fetch";
import {Article, Category, RawArticle, RawCategory, RawTag} from "@/application/interfaces/article";


export default function useArticlesController() {
    interface options {
        paginationSize?: number,
        paginationPage?: number,
        categoryId?: number,
    }

    const getArticles = async function ({
                                            paginationSize,
                                            paginationPage,
                                            categoryId
                                        }: options): Promise<Article[] | null> {
        let url = `blog-articles?populate=*&sort[0]=createdAt:desc`
        if (paginationPage && paginationSize) url += `&pagination[page]=${paginationPage}&pagination[pageSize]=${paginationSize}`
        if (categoryId) url += `&filters[blog_categories][id][$eq]=${categoryId}`;
        try {
            let resp = await getData(url, 20,);
            return resp.map((el: RawArticle, i: number): Article => {
                return {
                    id: el.id,
                    image_link: el.attributes.image.data.attributes.url,
                    title: el.attributes.title,
                    createdAt: el.attributes.publishedAt,
                    likes: el.attributes.likes || null,
                    categories: el.attributes.blog_categories.data.map((c) => {
                        return {...c.attributes, id: c.id}
                    }),
                    tags: el.attributes.blog_tags ? el.attributes.blog_tags.data.map((t: RawTag) => {
                        return {id: t.id, ...t.attributes}
                    }) : [],
                    newest: i === 0,
                    views: el.attributes.views,
                    body: el.attributes.body
                }
            })
        } catch (err) {
            console.log('err: ', err)
            return null
        }
    }

    const getArticle = async function (id: number) {
        let url = `blog-articles/${id}?populate=*`
        try {
            let resp: RawArticle = await getData(url, 0);
            let payload = JSON.stringify({
                data: {
                    views: resp.attributes.views + 1
                }
            })
            let r = await fetch(`${process.env.API_URL}/blog-articles/${id}`, {
                method: 'PUT',
                body: payload,
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            r = await r.json();
            return {
                id: resp.id,
                image_link: resp.attributes.image.data.attributes.url,
                title: resp.attributes.title,
                createdAt: resp.attributes.publishedAt,
                likes: resp.attributes.likes || null,
                categories: resp.attributes.blog_categories.data.map((c) => {
                    return {...c.attributes, id: c.id}
                }),
                tags: resp.attributes.blog_tags ? resp.attributes.blog_tags.data.map((t: RawTag) => {
                    return {id: t.id, ...t.attributes}
                }) : [],
                newest: false,
                views: resp.attributes.views,
                body: resp.attributes.body
            }
        } catch (err) {
            console.log('err: ', err)
            return null
        }
    }

    return {getArticles, getArticle}
}