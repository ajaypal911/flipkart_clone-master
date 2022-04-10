import React from 'react'
const initialstate = {
    lflag: false,
    loggedUser:{}
}
const Log = (state = { ...initialstate },action) => {
    switch (action.type) {
      case "SETFLAG":
        return { ...state, lflag: true ,loggedUser:action.payload};
      case "RESETFLAG":
            return { lflag: false ,loggedUser:{} };
        case "LOGGEDUSER":
           return {...state,loggedUser:action.payload} 
        default:
            return state;
    }
 }
export default Log;
