import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Hello, guest!",
            message: "Log in",
        };
    }
    
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);

            return {
                name: prevState.name === "Hello, guest!" ? "Welcome back user!" : "Hello, guest!",
                message: prevState.message === "Log in" ? "Log out" : "Log in",
            }
        }

        )
    };


    render(){
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                <span>{this.state.name}</span>
                <button onClick={() => this.handleClick()}>{this.state.message}</button>
                </div>

            </div>
        )
    }
}
export default NavBarSimple;