import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Todo from './Todo'
function App() {

  return (
    <>
      <div className='m-5'>
        <h1 className='text-center' style={{fontSize:"50px",marginTop:"35px"}}>&#x1F4D3; Todo List</h1>
        <Todo/>
      </div>
    </>
  )
}

export default App
