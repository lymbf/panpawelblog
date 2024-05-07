import {getData} from "@/application/hooks/fetch";
import {Article, RawArticle, RawTag} from "@/application/interfaces/article";


export default function useArticlesController() {


    const getArticles = async function (categoryId?: number):Promise<Article[]|null> {
        let url = `blog-articles?populate=*&sort[0]=createdAt:desc`
        if (categoryId) url += `&filters[blog_categories][id][$eq]=${categoryId}`;
        console.log('url: ', url)
        try {
            let resp = await getData(url, 20);
            return resp.map((el: RawArticle, i: number) => {
                return {
                    id: el.id,
                    image_link: el.attributes.image.data.attributes.url,
                    title: el.attributes.title,
                    createdAt: el.attributes.createdAt,
                    likes: el.attributes.likes || null,
                    category: el.attributes.blog_categories,
                    tags: el.attributes.blog_tags ? el.attributes.blog_tags.data.map((t: RawTag) => {
                        return {id:t.id, ...t.attributes}
                    }) : [],
                    newest: i === 0
                }
            })
        } catch (err) {
            console.log('err: ', err)
            return null
        }
    }

    return {getArticles}
}