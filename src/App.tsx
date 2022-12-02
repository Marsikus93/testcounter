import React, {useState} from 'react';
import './App.css';
import {Button1} from "./Button";

// export type DataType = {
//     count: 1|2|3|4|5
// }


function App() {

    let[count,setCount]=useState(0)
    const onClickHandler = () => {
        setCount(++count)
    }
    const resetHandler = () => {
        setCount(0)
    }
    return (<div className="counter">
            <div className="count">
                <h1 className="title">{count}</h1>
             <div className="buttons">   <Button1
                    name={"inc"}
                count={count}
                    hide={true}
                onClickHandler={onClickHandler}/>

                <Button1
                    name={"reset"}
                    count={count}
                    onClickHandler={resetHandler}
                    hide={false}
                /></div>
            </div>
        </div>
    )
}

export default App;
