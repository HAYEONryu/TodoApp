import React, {createRef, useState} from 'react';

const Chap4 = () => {
  const[form, setForm] = useState({
    nickname :"",
    message : ""
  });
  const {nickname, message} = form;
  let nameerr = createRef();
  let messerr = createRef();

  const[nextId, setNextId] = useState(0);
  const[messageList, setMessageList] = useState([]);
  // const { id, user, comment } = messageList;

  const handleClick = ()=>{
    if(nickname === "" ){
      nameerr.focus();
    }else {
      if(message === "" ){
        messerr.focus();
      }else{
//        alert(nickname + " said " + message);
        setMessageList(messageList.concat({id: nextId, user:nickname, comment:message}));
        setNextId(nextId+1);
        setForm({
          nickname :"",
          message : ""
        });
      }
    }
  };
  const handleKeypress = (e)=>{
    if(e.key === "Enter"){
      handleClick();
    }
  };
  const handleChange = (e)=>{
    const newform = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(newform);
  };
  const handleDelete = (id)=>{
    const deletedList = messageList.filter(old=> old.id !== id);
    setMessageList(deletedList);
  };

  const printList = messageList.map((one) => (<span key={one.id} onDoubleClick={()=>{handleDelete(one.id)}}>{one.user}: {one.comment}<br/></span>));
  
  return(
    <div>
      <h1>커맨트를 남겨보세요~</h1>
      <input
        type="text"
        name="nickname"
        placeholder="닉네임을 입력하세요*^^*"
        ref={(ref)=>nameerr = ref}
        value={nickname}
        onChange={handleChange}
        />
      <input
        type="text"
        name="message"
        value={message}
        ref={(ref)=>messerr = ref}
        placeholder="메세지를 입력하세요*^^*"
        onChange={handleChange}
        onKeyPress={handleKeypress}
        /><br/>
        <button onClick ={handleClick}>확인</button>
        <h2>comment:</h2>
        <p>더블클릭시 삭제됩니다.</p>
        <div>{printList}</div>
    </div>
  );
};

export default Chap4;