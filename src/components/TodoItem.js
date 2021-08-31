// src/components/TodoItem.js

import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => { e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

//text: todo내용, checked :체크박스상태 , id:todo의 고유 아이디, onToggle: 체크박스를 키고 끄는 함수
//todo-text : checked라는 문자열 넣고, css를 유동적으로 설정하기위해 템플릿 리터럴 사용
export default TodoItem;