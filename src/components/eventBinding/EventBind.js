import { Component } from 'react'

export default class EventBind extends Component {
   constructor(props){
       super(props)
       this.state = {message: "Hello"}
   }
//    handleClick(){
//        this.setState({message: "Goodbye"})
//        console.log("this: ", this);
//    }
    
    handleClick(name ="john"){
        this.setState({message: `Goodbye ${name}`})
        console.log("this: ", this)
    }
    render() {
        return (
            <div>
               <p>{this.state.message}</p>
               <h2>EventBinding</h2>
               <button onClick={this.handleClick.bind()}>Click1</button>
               <button onClick={() => this.handleClick("jane")}>Click2</button>
            </div>
        )
    }
}

