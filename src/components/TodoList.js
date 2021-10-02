// todos 배열을 props로 받아 온 후, map을 사용하여 여러 개의 TodoListItem으로 변환한다.
import React from "react";
import {List} from "react-virualized";
import TodoListItem from "./TodoListItem";

import './scss/TodoListItem.scss';

const TodoList = ({todos, onRemove, handleToggle})=>{
    return(
        <div className="TodoList">
        {todos.map(todo =>(
            <TodoListItem todo={todo} key={todo.id} handleToggle={handleToggle} onRemove={onRemove}/>
        ))}
        </div>
    );
};
export default React.memo(TodoList);
