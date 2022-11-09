import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title} - Shathy's Kitchen`;
    },[title])
}

export default useTitle;