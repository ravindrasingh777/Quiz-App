import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Addquiz from './Pages/Addquiz';
import Viewquiz from './Pages/Viewquiz';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Playquiz from './Pages/Playquiz';
import Result from './Pages/Result';
import Login from './Pages/Login';
import Register from './Pages/Register';
const firebaseConfig = {
  apiKey: "AIzaSyAMAYAiyd58NCQAyWE6MeXKXX589KLVPeU",
  authDomain: "quizz-app-58f8e.firebaseapp.com",
  databaseURL: "https://quizz-app-58f8e-default-rtdb.firebaseio.com",
  projectId: "quizz-app-58f8e",
  storageBucket: "quizz-app-58f8e.firebasestorage.app",
  messagingSenderId: "286682076844",
  appId: "1:286682076844:web:aca6d364146bb8953db109",
  measurementId: "G-GHEHJR39Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  
  const routes=createBrowserRouter(
    [
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/addquiz",
        element:<Addquiz/>
      },
      {
        path:"/viewquiz",
        element:<Viewquiz/>
      },
      {
        path:"/playquiz",
        element:<Playquiz/>
      },
      {
        path:"/result",
        element:<Result/>
      }
    ]
  )

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  );
}

export default App;
