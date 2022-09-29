
import {BrowserRouter, Route,Router, Routes} from "react-router-dom";
import Student from "./FunctionComponents/Student";
import Companies from "./FunctionComponents/Companies";
import College from "./FunctionComponents/College";
import About from "./FunctionComponents/About";

function App() {
  return (
   <>

{/* <Navn/> */}
{/* 
  <Route path="/" element={<About/>}/> */}
  {/* <Route path="/" element={<Contact/>}/>
  <Route path="/" element={<NotFound/>}/> */}

<College/>
<Companies/>
<Student/>
   </>
  );
}

export default App;
