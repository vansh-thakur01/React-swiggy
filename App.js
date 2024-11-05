import React from 'react';
import ReactDOM from 'react-dom/client';
import img from "./71qcoYgEhzL._SX3000_.jpg";
import img2 from "./download.jpg";

const jsxHeading = <h1>hi there form jsx</h1>

const Inside = (Prop) => <p>{Prop.children}hi there</p>

const Heading = ()=> {
return (
  <div>
  <Inside>hi i am there</Inside>
  <h2>heading<inside /></h2>
  </div>
)
}

const Flok = ()=>{
  return (<div>
    <h1>In flok<Inside/></h1>
    <Heading/>
  </div>)
}

// console.log(Heading());

const Header = ()=>{
  return (
    <div className="container">
      <img src={img} alt="img" className="img"></img>
      <input placeholder="Search" type="text"></input>
      <img src={img2} alt="img2" className="img2"></img>
    </div>
  );
}


const root = ReactDOM.createRoot(document.querySelector('#hithere'));

root.render(<Header/>);