import UserClass from "./UseClass";
import {Component} from "react";


class AboutClass extends Component{
    constructor(){
        super()
    }

    render(){
        return (
          <div>
            <h1>About page</h1>
            <UserClass name={"1"} location={"rampur"} />
          </div>
        );
    }
}

// const About = () => {
//     return(<div>
//         <h1>About page</h1>
//         <UserClass name ={"vansh"} location={"rampur"}/>
//     </div>)
// }

export default AboutClass;

