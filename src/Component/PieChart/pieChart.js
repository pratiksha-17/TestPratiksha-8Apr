
import React,{memo} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import config from './pieChartConfig';


const PieChart = () =>  {

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
      
      <h4 className = 'summaryWrap'>SUMMARY OF ATTEMPTS</h4>
      <div className="square"><span>20 Correct</span></div>
      <div className="squareInCorrect"><span>5 InCorrect</span></div>
      <div className="squareNotAttempt"><span>0 Not Attempted</span></div>
      </div>
    )
}


export default memo(PieChart)