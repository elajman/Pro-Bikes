import React from 'react'
import ItemDetail from './ItemDetail'
import productos from './productos.json'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const {id} = useParams()

  const getProductos = () => {
    return new Promise ((resolve, reject) => {
      if (productos.length === 0){
        reject(new Error("No hay productos."))
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    })
  }

  async function fetchingProductos(){
    try{
      const productosFetched = await getProductos();
    }catch(err){
      console.log(err);
    }
  }

  fetchingProductos();


  let productoARenderizar = productos.find((producto) => producto.id === id)

  return (
    <div>
      <ItemDetail producto={productoARenderizar}/>
    </div>
  )
}

export default ItemDetailContainer