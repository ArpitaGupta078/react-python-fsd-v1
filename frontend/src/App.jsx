import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Hero from './components/hero';
import StudyTips from "./components/study";
import MotivationTips from "./components/third";
import StudyAdvice from "./components/div";




function App() {
  return (
    <>
    <div className="main">
   
       <StudyTips></StudyTips>
       <StudyAdvice></StudyAdvice>
     
      <Hero></Hero>
  
        <MotivationTips></MotivationTips>
    
    </div>
    </>
  );
}

export default App;
