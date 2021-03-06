// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트.
// todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여준다
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import './scss/TodoListItem.scss';
import cn from "classnames";
import React from "react";

const TodoListItem = ({todo, onRemove, handleToggle})=>{
    const {id, text, checked} = todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>handleToggle(id)}>
                {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>  
            <div className="remove" onClick={()=>{onRemove(id)}}>
                <MdRemoveCircleOutline />
            </div>           
        </div>
    );
};
export default React.memo(TodoListItem);
