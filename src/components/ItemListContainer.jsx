import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loading from './Loading'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [bikes, setBikes] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'bikes')
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setBikes(docs)
      setLoading(false)
    })
  }, [])

  const datoFiltrado= bikes.filter((dataCategoria) => dataCategoria.category === category)

  useEffect(() => {}, [datoFiltrado])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {category ? (<ItemList data={datoFiltrado} />) : (<ItemList data={bikes} />)}
    </>
  )
}

export default React.memo(ItemListContainer)