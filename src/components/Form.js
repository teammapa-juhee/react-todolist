// src/components/Form.js
import React from 'react';
import './Form.css';


const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};
/*
value = 인풋의 내용
onCreate = 버튼클릭시 실행함수
onChange = 변경될때 실행함수
onKeyPress = Enter 눌렀을때 onCreate와 같은 작업 
*/

export default Form;