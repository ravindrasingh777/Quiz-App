import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../Context/Maincontext';
import { useContext,useEffect } from 'react';

const Addquiz = () => {
    const{user,Logout}=useContext(Context);
    const navigate=useNavigate();

     useEffect(
            ()=>{
                if(localStorage.getItem("User") == null){
                  navigate("/")
                }
            }
        )

    const toastify=(msg,flag)=>{
      toast(msg,{
        type:flag == 1 ? 'success': "error"
      })
    }

    const submithandler=(e)=>{
      e.preventDefault();
    
      const data={
        Question:e.target.question.value,
        Option1:e.target.option1.value,
        Option2:e.target.option2.value,
        Option3:e.target.option3.value,
        Option4:e.target.option4.value,
        CorrectOption:e.target.selectbox.value
      }

      if(data.Question == "" || data.Option1 == "" || data.Option2 == "" || data.Option3 == "" || data.Option4 == "" || data.CorrectOption == ""){
        return;
      }

     
     const userId=uuidv4();
     const db = getDatabase();
     set(ref(db, 'Questions/' + userId), data);
     e.target.reset();
     toastify("Quizz Submitted Sucessfully!!",1)

    }

    return (
        <>

        <div className='flex  bg-gradient-to-br from-purple-600 to-blue-500 gap-4 w-full h-[40px] justify-end items-center pr-5 font-semibold text-xl '>
            <Link to="/home"><div>Home</div></Link>
            <Link to="/viewquiz"><div>View-Quiz</div></Link>
            <Link to="/playquiz"><div>Play-Quiz</div></Link>
             <Link to="/"><button onClick={Logout}>Logout</button></Link>
        </div>
        <ToastContainer/>
        <div className="min-h-screen md:p-0 p-2  bg-gradient-to-br from-purple-600 to-blue-500 w-full bg-gray-100 flex  items-center justify-center">
      <div className="w-[1000px]   bg-white md:my-8 mt-4 my-[120px] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add New Quiz</h2>

        <form onSubmit={submithandler} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Question</label>
            <input
              type="text"
              name='question'
              placeholder="Enter your question"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 1</label>
            <input
              type="text"
              name='option1'
              placeholder="Enter option 1"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 2</label>
            <input
              type="text"
              name='option2'
              placeholder="Enter option 2"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 3</label>
            <input
              type="text"
              name='option3'
              placeholder="Enter option 3"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 4</label>
            <input
              type="text"
              name='option4'
              placeholder="Enter option 4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-2">Correct Answer</label>
            <select name='selectbox'
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className='text-xs' value="">Select the correct answer</option>
              <option className='text-xs' value="option1">Option 1</option>
              <option className='text-xs' value="option2">Option 2</option>
              <option className='text-xs' value="option3">Option 3</option>
              <option className='text-xs' value="option4">Option 4</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
    </>
    );
}

export default Addquiz;
