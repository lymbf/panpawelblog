import {Runtime} from "inspector";

export default function useFetch() {
    return {
        getData: async function getData(url: string, method?: string, body?: Object) {
            let res: any = await fetch(`${process.env.API_URL}/${url}`,
                {
                    method: method,
                    body: JSON.stringify(body)
                })
            res = await res.json();
            console.log('res.data: ', res.data)
            if (res.data) return res.data
            else return []

        }
    }
}