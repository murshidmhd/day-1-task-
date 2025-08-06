import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeCard from "./components/wlcomeCard";

// function App(){
//     const [inputValue,setInputVAlue] =useState("")
//     return(
//     <div>
//         <input type="text" placeholder="hey type somthing......"
//         value={inputValue}
//         onChange={(e) => setInputVAlue(e.target.value)}/>
//         <p> you typed : {inputValue}</p>
//     </div>)
// }

// export default App

// function App() {  const [theme, setTheme] = useState("light");

//   const style = {
//     backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
//     color: theme === "light" ? "#000000" : "#ffffff",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

//   return (
//     <div style={style}>
//       <h1> light / dark Theme Toggle</h1>
//       <button onClick={toggleTheme}> Switch Theme</button>
//     </div>
//   );
// }
// export default App;

// function App(){
//     const [count, setCount] = useState(0)
//     const inc =  ()=> setCount(count + 1)
//     const dec = ()=> setCount(count - 1)

//     return(
//         <div>
//             <h1> count is {count}</h1>
//             <button onClick={inc}> + </button>
//             <button onClick={dec}> - </button>
//             <button onClick={}> </button>

//         </div>
//     )
// }
// export default App

// function App(){
//     const [isHidden , setHidden] =useState(false)
// const toggleText = ()=> {
//     setHidden(!isHidden)
// }
//     return(
//         <div>
//             <button onClick={toggleText}> {isHidden ? 'show' :"hide"}</button>
//             {isHidden && <p> Hello , wlcome to React!</p>}

//         </div>
//     )
// }

// export default App

/*
function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <input placeholder="type any thing " value={tetx}
      on/>
      <p> you typed : </p>
    </div>
  );
}
export default App;*/

// function App(){
//     const [ show, setShow] = useState(false)
//     const toggleText = ()=> setShow(!show)

//     return ( 
//         <div> 
//             <button onClick={toggleText}> {show?"hide Message" : 'show message'}</button>
//             {show && <p> hello, this is a secret</p>}
         

//         </div>
//     )
// }


// export default App




// function App() {
//   const students = ["Ameer", "Nihal", "Murshid", "Afeefa"];

//   return (
//     <div>
//       <h2>Student Names</h2>
//       <ul>
//         {students.map((std ) => (
//             <li key= {index}> {std}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App 
