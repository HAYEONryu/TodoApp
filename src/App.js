import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Chap4 from "./pages/Chap4";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState, useRef, useCallback} from "../node_modules/react/cjs/react.development";



function App() {
  const [todos, setTodos] = useState([]);
  const currentId = useRef(0);
  const onInsert = useCallback(
    (text) => {
      const task ={
        id: currentId.current,
        text: text,
        checked: false,
      }
      setTodos(todos => todos.concat(task));
      currentId.current+=1;
    },[],);

  const onRemove = useCallback(
    (id) => {
      setTodos( todos=> todos.filter(todo => todo.id !== id));
    },[]);

  const handleToggle = useCallback(
    (id)=>{
      setTodos(todos=> todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    }, []);
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/pages/Chap4" component={Chap4} />
    //   </Switch>
    // </BrowserRouter>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} handleToggle={handleToggle} onRemove={onRemove}/>
      </TodoTemplate>
    );
}
export default App;
