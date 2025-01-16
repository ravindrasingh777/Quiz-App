import React, { createContext } from 'react';
import { useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';

const Context = createContext();
const Maincontext = (props) => {

    const[Question,setQuestion]=useState([]);
    const[current,setcurrent]=useState(0);
    const[right,setright]=useState([]);
    const[user,setuser]=useState(null);
    const[presentselect,setpresentselect]=useState([]);


    const Logout=()=>{
        localStorage.removeItem("User");
        toastify("Logout Sucessfully",1)
    }

   

    const toastify=(msg,flag)=>{
      toast(msg,{
        type:flag == 1 ? 'success' : "error"
      })
    }


    const quizdata=()=>{
        const db = getDatabase();
        const starCountRef = ref(db, 'Questions/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const arr=[];
        const keys=Object.keys(data);
        for(var k of keys){
          arr.push(
            {
                id:k,
                ...data[k]
            }
          )
          
        }
        Questionhandler(arr)
     });
    }


   
   


    const next=()=>{
        setcurrent(current + 1);
    }

    
    const prev=()=>{
        setcurrent(current - 1);
    }


    const Questionhandler=(data)=>{
        setQuestion(data)
    }

    return (
        <Context.Provider value={{Questionhandler,Question,current,next,prev,quizdata,toastify,toast,presentselect,setpresentselect,user,setuser,Logout}}>
            <ToastContainer/>
             {props.children}
        </Context.Provider>
    );
}

export default Maincontext;
export {Context};
