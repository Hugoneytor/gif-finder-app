import { useEffect, useState } from "react"
import fetchGifs from "../helpers/getGifs"

const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetchGifs(category).then((data)=>{
      setGifs(data);
      setIsLoading(false)
    })
  }, [])
  // fetchGifs()

  return {
    gifs,
    isLoading
  }
}

export default useFetchGifs