import React,{memo} from 'react';
import Header from './Header/header'
import Bar from './Bar/bar';
import PieChart from './PieChart/pieChart'

const Test = () =>{
    

    return(
        <>
        <Header title = 'Overall Summary'/>
        <Bar/>
        <PieChart/>
        </>
    )

}

export default memo(Test)