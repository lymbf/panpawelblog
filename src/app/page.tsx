
import useArticlesController from "@/application/controllers/articlesController";
import {Category} from "@/application/interfaces/article";

export default async function Home() {
   const {getCategories} = useArticlesController()
    const categories = await getCategories();
    return (
        <div >
            {categories && categories.map((cat)=>{
                console.log('category: ', cat)
               return <div key = {cat.name}>{cat.name}</div>
            })}
        </div>
    );
}
