import React, { useContext, useEffect, useState } from 'react';
import {data, Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context/Maincontext';
const Playquiz = () => {
    const {Question,current,next,prev,quizdata,presentselect,setpresentselect,user,Logout,toast}=useContext(Context);
    const[select,setselect]=useState("");
    
    const navigate=useNavigate()

     useEffect(
            ()=>{
                quizdata()

            },[]
        )

        useEffect(
                ()=>{
                    if(localStorage.getItem("User") == null){
                      navigate("/")
                    }
                }
            )


            const toastify=(msg,flag)=>{
                  toast(msg,{
                    type:flag == 1 ? 'success' : "error"
                  })
                }
            

        useEffect(
            ()=>{
                setselect(null);
            },[next]
        )

        const submithandler=()=>{
          navigate("/result");
        }



        const selector = (correct, pselect) => {
          setselect(correct); // Correct answer
          // console.log(correct);
         

          if(correct == pselect){
            setpresentselect([...presentselect,pselect]);
          }
          // console.log(select);

      };
    
       

    return (
        <>
         <div className='flex  bg-gradient-to-br from-purple-600 to-blue-500 gap-4 w-full h-[40px] justify-end items-center pr-5 font-semibold md:text-xl text-[17px] '>
            <Link to="/home"><div>Home</div></Link>
            <Link to="/addquiz"><div>Add-Quiz</div></Link>
            <Link to="/viewquiz"><div>View-Quiz</div></Link>
            <Link to="/"><button onClick={Logout}>Logout</button></Link>
        </div>
       
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 bg-gray-100 flex md:items-center md:p-0 p-2 items-start justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6  md:mt-0 mt-4 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Play Quiz</h1>
  
          <div className="space-y-4">
          <Box quiz={Question[current]} current={current} selector={selector} toastify={toastify}  select={select} />
          </div>
  
          <div className="mt-6 flex justify-between">
            <button onClick={prev}  className={`bg-gray-200  ${current == 0 && "hidden"} py-2 px-4 rounded hover:bg-gray-300`}>Previous</button>
            <button onClick={next} className={`bg-blue-500 ${current == Question.length - 1 && "hidden"}  text-white py-2 px-4 rounded hover:bg-blue-600`}>Next</button>
            <button onClick={submithandler} className={`bg-blue-500 ${current == Question.length - 1 ? "block" : "hidden"}  text-white py-2 px-4 rounded hover:bg-blue-600`}>Submit</button>
          </div>
        </div>
      </div>
      </>
    );
}


const Box=({quiz,current,select,selector,toastify})=>{
    return(
        <div className="border border-gray-300 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-700">Question {current + 1}: {quiz?.Question} </h2>
        <ul className="mt-2 space-y-2">
          <li>
            <button onClick={()=> {selector(quiz?.CorrectOption,"option1"),toastify(`${quiz?.CorrectOption == "option1" ? "You Select Correct Option1"  : "You Select Wrong Option1"}`,`${quiz?.CorrectOption == "option1" ? 1 : 0}`)} } className={`w-full  ${select === "option1" ? "!bg-green-500" : "bg-red-200"} py-2 px-4 text-left border border-gray-300 rounded `}>
              A. {quiz?.Option1}
            </button>
          </li>
          <li>
            <button onClick={()=> {selector(quiz?.CorrectOption,"option2"),toastify(`${quiz?.CorrectOption == "option2" ? "You Select Correct Option2"  : "You Select Wrong Option2"}`,`${quiz?.CorrectOption == "option2" ? 1 : 0}`)} } className={`w-full  ${select === "option2" ? "!bg-green-500" : "bg-red-200"} py-2 px-4 text-left border border-gray-300 rounded `}>
              B. {quiz?.Option2}
            </button>
          </li>
          <li>
            <button onClick={()=> {selector(quiz?.CorrectOption,"option3"),toastify(`${quiz?.CorrectOption == "option3" ? "You Select Correct Option3"  : "You Select Wrong Option3"}`,`${quiz?.CorrectOption == "option3" ? 1 : 0}`)} } className={`w-full  ${select === "option3" ? "!bg-green-500" : "bg-red-200"} py-2 px-4 text-left border border-gray-300 rounded `}>
              C. {quiz?.Option3}           
               </button>
          </li>
          <li>
            <button onClick={()=> {selector(quiz?.CorrectOption,"option4"),toastify(`${quiz?.CorrectOption == "option4" ? "You Select Correct Option4"  : "You Select Wrong Option4"}`,`${quiz?.CorrectOption == "option4" ? 1 : 0}`)} } className={`w-full  ${select === "option4" ? "!bg-green-500" : "bg-red-200"} py-2 px-4 text-left border border-gray-300 rounded `}>
              D. {quiz?.Option4}          
             </button>
          </li>
        </ul>
      </div>
    )
}





export default Playquiz;
