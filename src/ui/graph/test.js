import React,{memo} from 'react';
import Header from '../common/Header/header'
import Bar from './Bar/bar';
import PieChart from './PieChart/pieChart'

const Test = () =>{

    return( 
        <div className = 'graph'>
        <Header title = 'Overall Summary'/>
        <Bar/>
        <PieChart/>
        </div>
    )

}

export default memo(Test)