import React from 'react';

export type ButtonType={
    onClickHandler:()=>void
    count:number
    name:string
    hide:boolean
}

export const Button1=(props:ButtonType)=>{
    const maxcount=5
    return(
        <button className="b1" disabled={props.hide && props.count>=maxcount} onClick={props.onClickHandler}>{props.name}</button>
    )

}
