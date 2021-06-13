import React from 'react';
import {useSelector} from "react-redux";
import Key from "./Key";

const Keys = (props) => {

    const keys = useSelector(state=> state.keys )
    console.log('keys', keys)

    return (
        <div
        className={'keys'}
        >
            {
                keys.map((keypad, i)=>{

               return <Key keypad={keypad} i={i} key={keypad.id}/>

                })
            }
        </div>
    );
}

export default Keys;
