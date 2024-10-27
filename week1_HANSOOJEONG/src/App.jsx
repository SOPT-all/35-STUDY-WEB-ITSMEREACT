import React from 'react';
import Greeting from './Greeting'; 
import Cat from './Cat'; 
import CatList from './CatList'; 

const App = () => {
    const catName = "화사"; 
    const catAge = 9; 

    const cats = [
        { name: "화사", age: 9 },
        { name: "밤식이", age: 8 },
        { name: "로이", age: 5 }
    ];

    return (
        <div>
            <h1>고양이 월드에 오신 것을 환영합니다!</h1>
            <Greeting name={catName} /> 
            <Cat age={catAge} />
            <CatList cats={cats} />
        </div>
    );
};

export default App;