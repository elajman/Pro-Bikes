import ItemDetail from './ItemDetail'
import Loader from './Loading'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

  const {id}=useParams()
  const [bikes,setBikes]=useState([])
  const [loading,setloading]= useState(true)
  useEffect(()=>{
    const db = getFirestore()
    const oneItem = doc(db , "bikes",`${id}`)
    getDoc(oneItem).then ((snapshot)=> {
    if (snapshot.exists()){
      const docs=snapshot.data();
      setBikes(docs)
      setloading(false);
    }
    })
  },[id])

  if (loading){
    return <Loader/>
  }
  return (
    <>
      <ItemDetail data= {bikes} id={id}/>
    </>
  )
}

export default ItemDetailContainer