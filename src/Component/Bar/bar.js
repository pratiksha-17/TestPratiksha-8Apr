import React,{memo} from 'react';
import BarStatus from './barStatus'

const Bar = () =>{

    let  barTitle = ['Javacript Fundamentals', 'React Fundamentals', 'Total'],
         barHtml = <div className="bar bar1"></div>,

        bar = barTitle.map((title,key)=>{
            return(
                <>
                <span key = {key}>{title}</span>
                {barHtml}
                </>
            )
        })

    return(
        <>
        <h4 className = 'barHeader'>MARKS SCORED</h4>
        <div className='barWrapper'>{bar}</div>
        <BarStatus/>
        </>

    )

}

export default memo(Bar);