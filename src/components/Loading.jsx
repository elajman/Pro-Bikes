import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
  return (
    <>
    <div className="text-center mx-auto">
    <Spinner animation="grow" variant="success"style={{ marginTop:'5rem'}}>
    <h3 style={{marginLeft:'5rem'}}>Cargando...   </h3>
    </Spinner>
    </div>
    
    </>
  )
}

export default Loading