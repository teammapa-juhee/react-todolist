import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // todos 배열을 컴포넌트 배열로 변환-> 배열을 변환 할 때는 자바스크립트 배열의 내장함수 map 을 사용
    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
        //배열을 렌더링 할 때에는 key 값이 꼭 있어야함
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;