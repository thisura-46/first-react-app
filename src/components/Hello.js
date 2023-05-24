import React from "react";

const Hello = () => {
    // return (
    //     <div className = 'testClass'>
    //         <h1>Hello, Thisura Rama!</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        { id: 'Hello', className: 'testClass'}, 
        React.createElement('h1', null, 'Hello, Thisura Rama!')
    )
}

export default Hello;