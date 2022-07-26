import React, {useState}  from 'react'


export default function Test() {
    const [num, setNum] = useState(0);
    function add() {
        setNum(num+1)
    }
    return (
        <div>
            <div>sum = {num}</div>
            <button onClick={()=>add()}>CLICK ME</button>
        </div>
    )
}
