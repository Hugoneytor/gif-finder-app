import React from 'react'
import {GifGridItem} from './GifGridItem'
import useFetchGifs from '../Hooks/useFetchGifs'

export const GifGrid = ({category}) => {

  const {gifs, isLoading} = useFetchGifs(category)

  return (
    <>
      <h2>{category}</h2>
      {
        isLoading 
          && (<h2>Cargando...</h2>)
          
      }
      <div className='card-grid'>
        {gifs.map((gifItem)=>{
            return (
              <GifGridItem 
                {...gifItem} 
                key={gifItem.id}/>
            )
        })}
      </div>
    </>
  )
}
