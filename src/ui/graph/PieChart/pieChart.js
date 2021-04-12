
import React,{memo} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '../../common/Button/button'
import config from './pieChartConfig';
import showData from '../../../action'



const PieChart = () =>  {

  const dispatch = useDispatch();
  const history = useHistory();

  const redirectRouter = () =>{
    dispatch(showData)
    history.push('/students');
  }


    return(
    <div className = 'hightChart'>
      <HighchartsReact highcharts={Highcharts} options={config} />

      <div className='timetaken'>
        <h3 >8</h3>
        <p>Min(s)</p>
      </div>
      <div className='timetakenMin'>
        <h3 >50</h3>
        <p>Sec(s)</p>
      </div>

      <Button onClick = {redirectRouter} text='Show Result'/>

      <div className = 'summrayWrap'>
        <h4 >SUMMARY OF ATTEMPTS</h4>
        <div className="square"><span>20 Correct</span></div>
        <div className="squareInCorrect"><span>5 InCorrect</span></div>
        <div className="squareNotAttempt"><span>0 Not Attempted</span></div>
      </div>

      </div>
    )
}


export default memo(PieChart)