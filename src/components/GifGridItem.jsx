import React from 'react'

export const GifGridItem = ({id,url,title}) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} />
      <p>{title?title:'No title'}</p>
    </div>
  )
}
