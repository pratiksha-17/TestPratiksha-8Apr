import React,{memo} from 'react';

const Header = ({title, closeIcon = false, close}) =>{

    return(
        <div className = "header">
            <h1>{title}</h1>
            {closeIcon && <span className="close" onClick={close}>&times;</span>}
        </div>
    )

}

export default memo(Header)