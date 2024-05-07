import {Category, Tag} from "@/application/interfaces/article";

type ArticlesFilters = {
    category?: Category,
    tags?: Tag[]
}

export {type ArticlesFilters}