import React from 'react';
import Cat from './Cat'; // Cat 컴포넌트 import

const CatList = ({ cats }) => {
    return (
        <div>
            <h3>고양이 목록:</h3>
            {cats.map((cat, index) => (
                <div key={index}>
                    <Cat name={cat.name} age={cat.age} /> {/* Cat 컴포넌트에 name과 age 전달 */}
                </div>
            ))}
        </div>
    );
};

export default CatList;