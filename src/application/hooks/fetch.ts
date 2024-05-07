"use server"
const getData = async function getData(url: string, cache?:number, method?: string, body?: Object) {
    try{
        let res: any = await fetch(`${process.env.API_URL}/${url}`,
            {
                method: method,
                body: JSON.stringify(body),
                next: { revalidate: cache || 3600}
            })
        res = await res.json();
        // console.log('res.data: ', res.data)
        if (res.data) return res.data
        else return []
    }catch(e){
        console.log('e error: ', e)
        return null
    }

}

export {getData}