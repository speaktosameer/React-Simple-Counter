import React, {Component} from 'react';
import '../App.css'

class Counter extends Component{
    state={
        count:0
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    reset=()=>{
        this.setState({
            count:0
        })
    }
    
    render(){
        return(
            <div>
            <h1>Counter</h1>
            <h1>{this.state.count}</h1>
                <button  id="btn" onClick={()=> this.increment()}>+</button>
                <button id="btn" onClick={()=>this.reset()}>R</button>
                <button id="btn" onClick={()=>this.decrement()}>-</button>
                
            </div>
        );
    }

}
export default Counter;