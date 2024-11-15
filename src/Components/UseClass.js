import React from "react";
import { GITHUB_USER_URL } from "../config/utils";

class UserClass extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            userData:{
                name:"none"
            }
        }
    }

    async componentDidMount(){
        const response = await fetch(GITHUB_USER_URL);
        const data = await response.json();
        this.setState({
            userData:data
        })
    }

    componentDidUpdate(){
        console.log("updated");
    }

    componentWillUnmount(){
        console.log("unmounted");
    }

    render(){

        const {location} = this.props;
        const {name} = this.state.userData;
        return (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}
export default UserClass;

// console.log(React.Component);