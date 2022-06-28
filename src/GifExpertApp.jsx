import { useState } from "react"
import {AddCategory, GifGrid} from "./components"

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [busquedaRepetida, setBusquedaRepetida] = useState(false);

  const onAddCategory = (newCategory) => {
  
    const newArray = categories.map((cat)=>{
      return cat.toLowerCase();
    })
    if(newArray.includes(newCategory.toLowerCase())){
      setBusquedaRepetida(true)
      return;
    }else{
      setCategories([newCategory, ...categories])
    }
  }

  const OnAlertBusqueda = () => {
    setTimeout(()=>{
      setBusquedaRepetida(false)
    },3000)
    return (
      <div className="alert">
        <h2 className="alert-h2">Esto ya se buscó</h2>
      </div>
    )
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      {busquedaRepetida ? <OnAlertBusqueda /> : null}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ value =>  onAddCategory(value) }
      />
      {categories.map( (category)=>{
        return (
          <GifGrid 
            key={category} 
            category={category}/>
        )
      })}
    </>
  )
}

export default GifExpertApp