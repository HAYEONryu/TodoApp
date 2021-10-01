// 화면을 가운데 정렬 시켜주며 앱 타이틀을 보여준다.
// childred 내부 jsx를 props로 받아 와서 렌더링 해준다
import React from "react";
import './scss/TodoTemplate.scss';

const TodoTemplate = ({children})=>{
    return(
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>

    );
};
export default TodoTemplate;