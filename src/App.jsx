import { Component, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeCard from "./components/wlcomeCard";
import { useRef } from "react";

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

// function app(){
//     const products=[
//         {id:101,name:"Laptop",},
//         {id:102,name:"mouse"},
//         {id:103,name:"keyboard"},
//         {id:104,name:" Monitor"}
//     ]
//     return (
//         <div>
//             <ul>
//                 {products.map((prd)=> (
//                     <li key={prd.id}>{prd.name}</li>
//                 ))}
//             </ul>
//         </div>

//     )
// }

// export default app

/*function app() {
  const students = [
    { id: 1, name: "Ameer", grade: "A" },
    { id: 2, name: "Nihal", grade: "B" },
    { id: 3, name: "Murshid", grade: "A+" },
  ];

  return (
    <div>
      <ul>
        {students.map((std) => (
          <li key={std.id}>
            {" "}
            Name: {std.name} {std.grade}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default app;*/

/*function app(){
    const isAdmin =true
return(
    <div>
{isAdmin && <h1> Wlcome admin</h1>}
{!isAdmin&&<h1>acces denied</h1>}
    </div>
)
}


export default app*/

// function app(){
//     return(
// <div>

// </div>
//     )
// }

/*function App() {
   const sayHello = function sayHello(){
        return alert('hello')
    }
  return (
   <button onClick={sayHello}> say hello </button>
  );
}


export default App*/

// function app() {
//     const handleUpload= () =>{
//         alert('Upload Started')
//     }

//   return (
//     <div>
//       <button onClick={() => alert("Download Started")}>Download</button>
//       <button onClick={handleUpload}>Upload </button>
//     </div>
//   );
// }

// export default app;

// function App (){
//     const inputRef = useRef()
//     function handleClick(){
//         inputRef.current.focus()
//     }
// return(
//     <div>
//         <input ref={inputRef} type="text" placeholder="type somthing..." />
//         <button onClick={handleClick}> Focus Input</button>
//     </div>
// )

// }

// export default App

// function App() {
//   const inputRef = useRef();

//   function handleFocus() {
//     inputRef.current.focus();
//   }

//   function handleClear() {
//     inputRef.current.value = "";
//   }
//   return (
//     <div>
//       <input type="text" placeholder=" type sommthng..." ref={inputRef}/>
//       <div>
//         <button onClick={handleFocus}>Focus input </button>
//         <button onClick={handleClear} style={{marginLeft:"10px"}}> Clear Input</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   useEffect(() => {
//     console.log("component has mounted(shown or screen)");
//   }, []);
//   return (
//     <div>
//       <p> hello react</p>
//     </div>
//   );
// }

// export default App;

// class Counter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };
//   }
// }






// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   handleIncrimment = () => {
//     thi
//   }

//   render() {
//     return <h2>Count: {this.state.count}</h2>;
//   }
// }

// export default Counter;



