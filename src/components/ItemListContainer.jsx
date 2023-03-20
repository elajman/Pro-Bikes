import React from 'react'
import ItemList from './ItemList'
import productos from './productos.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'


const ItemListContainer = () => {
  
  const {categoria}  = useParams();

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
      const datos = await getProductos();
    }catch(err){
      console.log(err);
    }
  }

  fetchingProductos();

  const filtroProductos = productos.filter((producto) => (producto.categoria.toLowerCase()) === categoria)
  
  let renderizoProductos = [];
  renderizoProductos = categoria ? filtroProductos : productos

  return (
    <div>
      <ItemList productos={renderizoProductos}/>
    </div>
  )
}

export default ItemListContainer

/**
 * 
 * const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      // rechazo promesa si productos esta vacio
      if (productos.length === 0) {
        reject(new Error("No hay productos."));
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    // uso una function asincrona dentro del useEffect()
    async function fetchingProductos() {
      try {
        const datos = await getProductos();
        setProductos(datos);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingProductos();
  }, []);

  // uso el estado de los productos para filtrar por categoria
  const filtroProductos = productos.filter(
    (producto) => producto.categoria.toLowerCase() === categoria
  );

  const renderizoProductos = categoria ? filtroProductos : productos;

  return (
    <div>
      <ItemList productos={renderizoProductos} />
    </div>
  );
};

export default ItemListContainer;
 */