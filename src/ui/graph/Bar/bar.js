import React,{memo} from 'react';
import BarStatus from './barStatus'

const Bar = () =>{

    let  barTitle = ['Javacript Fundamentals', 'React Fundamentals', 'Total'],

        bar = barTitle.map((title,key)=>{
            return(
                <>
                <span key = {key}>{title}</span>
                <div className={`bar bar${key}`}></div>
                </>
            )
        })

    return(
        <>
        <h4>MARKS SCORED</h4>
        <div className='barWrapper'>
        <div> {bar} </div>
        <BarStatus/>
        </div>
        
        </>

    )

}

export default memo(Bar);