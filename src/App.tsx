import React, {useState} from 'react';

import './App.css';

import { TodoItem } from './components/TodoItem/TodoItem';

type TodoProps = {
  item: string;
  id: number
}

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [item, setItem] = useState<string>("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setItem(e.target.value)
  }

  const handleSubmit = () => {
    if(item){
      setTodos([...todos, {item: item, id: todos.length}]);
      setItem("");
    }
  }

  const handleCheck = (id: number) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }


  return (
    <div className="App container-fluid">
       <div className="row justify-content-center">
            <div className="col-12 py-4 px-3 text-center" id="header">
                <h1>Todo App with React and TypeScript</h1>
                <input type="text" value={item} onChange={(e) => handleChange(e)} className="form-control w-75 mx-auto my-4 py-4" placeholder="Enter new Item" />
                <button onClick={() => handleSubmit()} className="btn add-btn">Add todo</button>
            </div>
            <ul className="col-12 col-md-8 my-4 text-left">
              {todos?.map((todo, idx) =>  <TodoItem key={idx} text={todo.item} id={todo.id} handleCheck={handleCheck}/>)}
            </ul>
        </div>
     
    </div>
  );
}

export default App;
