import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/Maincontext';

const Home = () => {
   const{user}=useContext(Context);
    const navigate=useNavigate()

    useEffect(
        ()=>{
            if(localStorage.getItem("User") == null){
              navigate("/")
            }
        }
    )

    const startquiz=()=>{
        navigate("/addquiz");
    }

    const viewquiz=()=>{
        navigate("/viewquiz");
    }

    const playquiz=()=>{
        navigate("/playquiz");
    }


    return (
        <div className="min-h-screen md:p-0 p-2 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
        <div className="max-w-lg bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">Welcome to QuizMaster!</h1>
          <p className="text-gray-600 mb-6">Test your knowledge and challenge yourself with our fun and exciting quizzes. Are you ready to begin?</p>
  
          <div className="flex flex-col gap-4">
            <button onClick={startquiz} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300">
              Add Quiz
            </button>
  
            <button  onClick={viewquiz} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300">
              View Leaderboard
            </button>
  
            <button onClick={playquiz} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg shadow-md transition duration-300">
              Play-Quizz
            </button>
          </div>
  
          <div className="mt-8">
            <p className="text-sm text-gray-500">Powered by QuizMaster</p>
          </div>
        </div>
      </div>
    );
}

export default Home;
