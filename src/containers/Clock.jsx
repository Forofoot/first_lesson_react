import { cleanup } from "@testing-library/react"
import React from "react"
import { useState, useEffect } from "react"

/*class Clock extends React.Component{

    constructor(){
        super()
        this.state = {
            time: new Date
        }
    }

    componentDidMount(){
        this.clockRun = setInterval(()  => this.setState({time : new Date}), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockRun)
    }
    
    render(){
        return (
            <div className="clock">
                <p>Heure: {this.state.time.toLocaleString()}</p>
            </div>
        )
    }
    
}

export default Clock;*/

export default function Clock(){
    const [clock, setClock] = useState({
        time: new Date
    })


    useEffect(() => {
        const runClock = setInterval(() => 
        setClock({time : new Date}), 1000)
        return function cleanup() {
            clearInterval(runClock)
        }
    }, [])
    return(
        <div className="clock">
            <p>Heure : {clock.time.toLocaleString()}</p>
        </div>
    )
}