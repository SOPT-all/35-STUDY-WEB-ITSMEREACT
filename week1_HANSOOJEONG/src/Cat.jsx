import React from 'react';

const Cat = ({ name, age }) => {
    return <p>귀여운 {name}의 나이는 {age}살입니다.</p>; // props로 전달된 name과 age 사용
};

export default Cat; 