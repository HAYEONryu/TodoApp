// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state로 인풋의 상태를 관리한다.
import React from "react";
import {MdAdd} from "react-icons/md";
import { useState, useCallback} from "react";
import './scss/TodoInsert.scss';

const TodoInsert= ({onInsert})=>{
    const [value, setValue] = useState('');
    const hanleChange= useCallback( e => {
        setValue(e.target.value);
    },[],);
    const handlesubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue("");
            e.preventDefault();//서밋하면 새로고침 되는데 이걸로 새로고침하지 말라고 함. 
        },
        [onInsert, value],
    )
    return(
        <form className="TodoInsert" onSubmit={handlesubmit}>
            <input placeholder="할 일을 입력하세요"
                    value= {value}
                    onChange={hanleChange}/>
            <button type="submit">
            <MdAdd/> 
            </button>
        </form>
    );
};
export default TodoInsert;