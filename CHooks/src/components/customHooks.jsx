import { useState, useEffect } from "react"
import style from "../components/customHooks.module.scss"

export function useFetch(url) {
    
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url])

  return [data]

}