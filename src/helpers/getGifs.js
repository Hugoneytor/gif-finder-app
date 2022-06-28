const fetchGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=17xf3LBdTnGeYbEUwCz9V25SLYiNu997&limit=10&q=${category}`;
  const resp = await fetch(url)

  const {data} = await resp.json()

  const gifsAPI = data.map((gif)=>{
    return {
      id: gif.id,
      url: gif.images.downsized_medium.url,
      title: gif.title
    }
  })

  // setGifs(gifsAPI)
  return gifsAPI;

}

export default fetchGifs;