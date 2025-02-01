import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume"
import Project from "./components/Projects";
import MoveToTop from "./components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./components/LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";


function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        {/* <Route path="/Resume" element={<Resume/>}/> */}
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
