import React,{memo} from 'react';

const Button = ({onClick, text}) =>{

    return( 
        <button onClick = {onClick}>{text}</button>
    )

}

export default memo(Button)