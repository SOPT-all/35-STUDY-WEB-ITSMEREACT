import React from 'react';
import Greeting from './Greeting'; 
import Cat from './Cat'; 
const App = () => {
    const catName = "화사"; // 변수 선언
    const catAge = 9; // 나이

    return (
        <div>
            <h1>안녕하세요!</h1>
            <Greeting name={catName} /> {/* Greeting 컴포넌트에 props 전달 */}
            <Cat age={catAge} /> {/* Profile 컴포넌트에 props 전달 */}
        </div>
    );
};

export default App;