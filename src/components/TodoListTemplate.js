import React from 'react';
import './TodoListTemplate.css';
import { Link } from 'react-router-dom';

const Btn = {
  width: '100px',
  height: '50px',
  textAlign: 'center',
  margin: '0 auto',
  position: 'relative',
  textDecoration: 'none',
  backgroundColor: 'rgb(34, 184, 207)',
  color:'#fff'
}

//비구조화 할당 -> 두개의 props를 받아서 
const TodoListTemplate = ({form, children}) => {
  return (
    <div>
    <div className="coin-wrapper" style={{textAlign:'center',position:'relative'}}>
      <Link to="/coin" style={Btn}>버튼</Link>
    </div>
    <main className="todo-list-template" style={{background:"white",width:"512px",boxShasow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",margin:"0 auto",marginTop:"4rem"}}>
      <div className="title" style={{padding:"2rem",fontSize:"2.5rem",textAlign:"center",frontWeight:"100",background:"#22b8cf",color:"white"}}>
        오늘 할 일
      </div>
      <section className="form-wrapper" style={{padding:"1rem",borderBottom:"1px solid #22b8cf"}}>
        {form}
      </section>
      <section className="todos-wrapper" style={{minHeight:"5rem"}}>
        { children }
      </section>
    </main>
    </div>
  );
};

export default TodoListTemplate;
