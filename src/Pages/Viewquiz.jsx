import React, { useContext, useEffect, useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context/Maincontext';
const Viewquiz = () => {

    const {Question,quizdata,user,Logout}=useContext(Context);
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

    return (
        <>
        <div className='flex bg-gradient-to-br from-purple-600 to-blue-500 gap-4 w-full h-[40px] justify-end items-center pr-5 font-semibold text-xl '>
            <Link to="/home"><div>Home</div></Link>
            <Link to="/addquiz"><div>Add-Quiz</div></Link>
            <Link to="/playquiz"><div>Play-Quiz</div></Link>
            <Link to="/"><button onClick={Logout}>Logout</button></Link>
        </div>
        
        <div className="h-screen  bg-gradient-to-br from-purple-600 to-blue-500 bg-gray-50  flex items-start justify-center py-4">
        <div className="md:w-[1100px] w-[400px] md:mt-0 mt-3 bg-white rounded-lg shadow-md md:p-6 p-0">
          <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-6 text-center">Quiz List</h2>
  
          <table className="table-auto md:text-xl text-[10px] w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border md:block hidden border-gray-300 px-4 py-2 text-left text-gray-700 font-medium">S.No</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-medium">Question</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-medium">Option1</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-medium">Option2</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-medium">Option3</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-medium">Option4</th>
                
              </tr>
            </thead>
            <tbody>
             
             {
                Question?.map(
                    (item,index)=>{
                        return(
                            <tr key={index} className="hover:bg-gray-100 w-full">
                            <td className="border md:block hidden border-gray-300 px-4 py-2 text-gray-600">{index + 1}</td>
                            <td className="border text-red-500 border-gray-300 px-4 py-2">{item.Question}</td>
                            <td className={`border ${'option1' == item.CorrectOption && "text-green-500"} border-gray-300 px-4 py-2 text-gray-600`}>{item.Option1}</td>
                            <td className={`border ${'option2' == item.CorrectOption && "text-green-500"} border-gray-300 px-4 py-2 text-gray-600`}>{item.Option2}</td>
                            <td className={`border ${'option3' == item.CorrectOption && "text-green-500"} border-gray-300 px-4 py-2 text-gray-600`}>{item.Option3}</td>
                            <td className={`border ${'option4' == item.CorrectOption && "text-green-500"} border-gray-300 px-4 py-2 text-gray-600`}>{item.Option4}</td>
                           
                          </tr>
                        )
                    }
                )
             }
            
            </tbody>
          </table>
        </div>
      </div>
      </>
    );
}

export default Viewquiz;
