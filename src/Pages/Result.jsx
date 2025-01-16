import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Maincontext';

const Result = () => {
    const {Question,Logout,presentselect,setpresentselect}=useContext(Context);

    const retaketest=()=>{
      setpresentselect("");
    }

    return (
      <>
      <div className='flex  bg-gradient-to-br from-purple-600 to-blue-500 gap-4 w-full h-[40px] justify-end items-center pr-5 font-semibold md:text-xl text-[15px] '>
                  <Link to="/home"><div>Home</div></Link>
                  <Link to="/addquiz"><div>Add-Quiz</div></Link>
                  <Link to="/viewquiz"><div>View-Quiz</div></Link>
                  <Link to="/playquiz"><div>Play-Quiz</div></Link>
                  <Link to="/"><button onClick={Logout}>Logout</button></Link>
              </div>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 bg-gray-100 md:p-0 p-2 flex md:items-center items-start justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg md:mt-0 mt-4 w-full text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Results</h1>
    
            <p className="text-lg text-gray-600">You scored:</p>
            <p className="text-4xl font-extrabold text-blue-500 my-4">{Math.ceil(presentselect.length == "" ? "0" : presentselect?.length / Question?.length * 100)}%</p>
    
            <div className="my-6">
              <h2 className="text-xl font-semibold text-gray-700">Summary</h2>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex justify-between">
                  <span>Correct Answers:</span>
                  <span className="font-bold">{presentselect?.length}</span>
                </li>
                <li className="flex justify-between">
                  <span>Wrong Answers:</span>
                  <span className="font-bold">{Question?.length - presentselect?.length}</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-bold">{Question?.length}</span>
                </li>
              </ul>
            </div>
    
            <div className="mt-6 flex justify-center space-x-4">
              <Link to="/playquiz">
              <button onClick={retaketest} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Retake Quiz
              </button>
              </Link>
             
            </div>
          </div>
        </div>
        </>
      );
}

export default Result;
