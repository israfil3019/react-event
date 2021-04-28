import { Component } from 'react'

export default class EventBind extends Component {
    constructor(props){
       super(props)
       this.state = {message: "Hello"}
       this.handleClick = this.handleClick.bind(this)
    }
    // handleClick(){
    //    this.setState({message: "Goodbye"})
    //    console.log("this: ", this);
    // }
    
    // handleClick(name ="john"){
    //     this.setState({message: `Goodbye ${name}`})
    //     console.log("this: ", this)
    // }

    // handleClick(){
    //     this.setState({message: "Goodbye"})
    //     console.log("this: ", this)
    // }
    handleClick = () => {
        this.setState({message: "Goodbye"})
    }
    render() {
            // * 1. Binding in render method
            // * 2. Binding in render method using arrow function
            // * 3. Binding in the constructor
            // * 4. Class property as an arrow function
        return (
            <div>
               <p>{this.state.message}</p>
               <h2>EventBinding</h2>
               <button onClick={this.handleClick.bind()}>Click1</button>
               <button onClick={() => this.handleClick("jane")}>Click2</button>
               <button onClick={this.handleClick}>Click3</button>
               <button onClick={this.handleClick}>Click4</button>
            </div>
        )
    }
}

