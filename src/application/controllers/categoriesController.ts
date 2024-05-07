import {getData} from "@/application/hooks/fetch";
import {Category, RawCategory} from "@/application/interfaces/article";

export default function useCategoriesController(){
    const getCategories = async function(){
        try{
            const resp = await getData(`blog-categories?populate=*&sort[0]=createdAt:desc`, 20);
            let categories:Category[] = resp.map((el:RawCategory)=>{
                return {id: el.id, name: el.attributes.name, article: el.attributes.article}
            })
            // console.log('categories: ', categories)
            return categories
        }catch(err){
            console.log('err: ', err)
            return null
        }
    }
    return {getCategories}
}