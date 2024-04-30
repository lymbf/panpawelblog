import useFetch from "@/application/hooks/fetch";
import {Category, RawCategory} from "@/application/interfaces/article";

export default function useArticlesController() {
    const {getData} = useFetch();
   const getCategories = async function(){
       const resp = await getData('blog-categories');
       let categories:Category[] = resp.map((el:RawCategory)=>{
           return {id: el.id, name: el.attributes.name, article: el.attributes.article}
       })
       return categories
   }
   return {getCategories}
}