
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

// function MissedGoal() {
//     return <h1>OMOOOOO YOU MISSED!?????!</h1>
// }

// function MadeGoal(){
//     return <h1>OMOOOOO YOU MADE IT</h1>
// }
function Football() {
    // const [color,setcolor]=useState("red");
    const [num,setnum]=useState(0);
    const [name,setname]=useState("");
    const [items,setitem]=useState([]);

    // function 

    function deleteitem(){
        alert("are you sure?");
    }
    
    return (
        // <button onClick={() => shoot(false)}>Take the shot!</button>
        <>
            {/* <h1>my fav color is {color}</h1>
            <button
            type='button'
            onClick={() => setcolor('blue')}>
            Blue
            </button>
            <button
            type='button'
            onClick={() => setcolor('pink')}>
            pink
            </button>
            <button
            type='button'
            onClick={() => setcolor('yellow')}>
            yellow
            </button> */}
            {/* <h1>the number is {num}</h1>
            <button
            type='button'
            onClick={() => setnum(num+1)}
            >
            increase
            </button>
            <button
            type='button'
            onClick={() => setnum(num-1)}
            >
            decrease
            </button> */}
            <h1>react check</h1>
            <button
            type='button'
            onClick={() => deleteitem()}
            >
            Delete
            </button>
        </>
    );
}

export default Football;