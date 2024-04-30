import useArticlesController from "@/application/controllers/articlesController";
import {Category} from "@/application/interfaces/article";

export default async function Home() {
   const {getCategories} = useArticlesController()
    const categories:Category[] = await getCategories();
    return (
        <div >
            {categories.map((cat)=>{
                console.log('category: ', cat)
               return <div>{cat.name}</div>
            })}
        </div>
    );
}
