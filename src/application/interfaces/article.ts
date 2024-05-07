import {BlocksContent} from "@strapi/blocks-react-renderer";

type Article = {
    image_link: string,
    body: BlocksContent,
    title: string | null,
    createdAt: string,
    likes?: number | null,
    category: Category,
    tags?: Tag[],
    id: number,
    newest?: boolean
}

type RawArticle = {
    id: number,
    attributes: {
        title: string,
        body: BlocksContent,
        createdAt: string,
        publishedAt: string,
        updatedAt: string,
        likes?: number,
        blog_categories: {data: RawCategory },
        blog_tags?: {data: RawTag[] }
        image: {
            data: {
                attributes: {
                    name: string,
                    url: string,
                }
            }
        }
    }
}
type Category = {
    id: number,
    name: string,
    article: Article

}

type RawCategory = {
    id: number,
    attributes: {
        name: string,
        article: Article
    }
}

type RawTag = {
    id: number,
    attributes:{
        name: string,
        article: Article
    }
}

type Tag = {
    id: number,
    name: string,
    article: Article
}

export type {Category, Article, RawCategory, RawArticle, RawTag, Tag}