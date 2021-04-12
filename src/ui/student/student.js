import React,{memo} from 'react';
import Table from '../common/Table/table';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from '../common/Header/header'

const Student = () =>{
  const counter = useSelector(state => state);
  const history = useHistory();


    let header = [
        {label: 'Name' , key: 'name'}, 
        {label: 'Mobile Number' , key: 'mobile_number'}, 
        {label: 'Status' , key: 'status'}, 
        {label: 'Email' , key: 'email'}],
     closeHandler = () =>{
        history.goBack();
    }

    return( 
        <>
        <Header title = 'Student Details' closeIcon={true} close={closeHandler}/>
        <Table data={counter.data} header = {header}/>
        </>
        
    )

}

export default memo(Student);