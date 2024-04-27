export default function useFetch() {
    return async function getData(url: string, method?: string, body?: Object) {
        let res = await fetch(`${process.env.API_URL}/${url}`,
            {
                method: method,
                body: JSON.stringify(body)
            })
    }
}