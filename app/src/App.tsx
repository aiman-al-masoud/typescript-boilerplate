import React, { Component, ReactNode } from "react"
import Smily from "../res/smiley.png"

export default class App extends Component<{}, {time : number, asyncTask : any}>{

    constructor(props:{}){
        super(props)

        this.state = {
            time : 0,
            asyncTask : 0
        }
    }

    render(): ReactNode {
        return <div> 
            <p>{this.state.time}</p>
            <img src={Smily} alt="A yellow smiley face" title="A yellow smiley face" />
        </div>
    }

    componentDidMount(): void {
        const asyncTask = setInterval(()=>this.setState({time:this.state.time+1}), 1000)
        this.setState({asyncTask : asyncTask})
    }

    componentWillUnmount(): void {
        clearInterval(this.state.asyncTask)
    }

}