import React,{memo} from 'react';

const BarStatus = ({title}) =>{

    return(
    <div className='barStatus'>
        <table>
            <tbody>
            <tr>
                <th>Score</th>
                <th>Percentage</th> 
            </tr>
            <tr>
                <td>17/22</td>
                <td>77.27%</td>
            </tr>
            <tr>
                <td>31/40</td>
                <td>77.50%</td>
            </tr>
            <tr>
                <td>48/60</td>
                <td>77.42%</td>
            </tr>
            </tbody>
        </table>
    </div>
    )

}

export default memo(BarStatus)