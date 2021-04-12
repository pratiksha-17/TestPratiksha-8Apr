import {createStore } from "redux";

const reducer = (state ={data : ''}, action) =>{
    switch (action.type){
        case 'Student_DATA' : 
            return {
                data : action.payload
            }
        default :
            return state;
    }
}

const store = createStore(reducer);

export default store;