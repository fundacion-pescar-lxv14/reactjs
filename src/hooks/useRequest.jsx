export const useRequest = ({
    id=null, 
    method="GET",
    params,
    callback = (e)=> {console.log(e)},
}) => {
    const baseURL = import.meta.env.VITE_SERVER_URL
    const data = new URLSearchParams()
    const object = {method}
    const URL = `${baseURL}/tasks${id?"/"+id:''}` 
    if (method === "POST" || method === "PUT"){
        Object.keys(params)?.map(key =>{
            if (params[key]!=null) data.append(key, params[key])
        })
        object.method = method;
        object.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        object.body = data.toString()
    }
    return (
        fetch(URL, object)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => callback(err))
)}