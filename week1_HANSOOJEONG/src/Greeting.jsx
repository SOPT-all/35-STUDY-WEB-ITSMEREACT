// Greeting.jsx
import React, { useState } from 'react';

const Greeting = ({ name }) => {
    const [feedCount, setFeedCount] = useState(0);

    const handleFeedCats = () => {
        setFeedCount(feedCount + 1);
    };

    return (
        <div>
            <h2>환영합니다, {name} 집사님!</h2>
            <button onClick={handleFeedCats}>사료 주기</button>
            {feedCount > 0 && <p>{name}님이 고양이들에게 {feedCount}번 사료를 주었습니다!</p>}
        </div>
    );
};

export default Greeting;
