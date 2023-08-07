import { useState, useEffect } from 'react';

export default function Todo() {

  const [value1, setValue1] = useState({
    message: ""
  });
  const [todoData, setTodoData] = useState([])

  const handleChange = (e) => {
    setValue1({ ...value1, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let index = todoData.slice(-1)[0]?.id
      if (index) {
        setTodoData([...todoData, { ...value1, id: ++index }])
      }
      else {
        setTodoData([...todoData, { ...value1, id: 1 }])
      }
    }
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todoData"))
    if (data) {
      setTodoData(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData))
  }, [todoData])

  return (
    <div className='row'>
      <div className='col-3'></div>
      <div className='col-6 m-5 bg-light p-3 rounded'>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className='form-control p-3'
          placeholder='Write Your todos here...'
        />
        
          {
            todoData.length !== 0 && todoData.map((todo) => {
              return (
                <div className='d-flex justify-content-between mt-2 p-3 border-bottom border-secondary border-2 mb-1' key={todo.id}>
                  <div><input type="checkbox" className='form-check-input me-3'/>{todo.message}</div>
                  <p className='text-danger mt-2' style={{fontSize:"10px"}}>&#10060;</p>
                 </div>
              )
            })
          }
        
      </div>
      <div className='col-3'></div>
    </div>
  );
}