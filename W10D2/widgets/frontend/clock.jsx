import React from 'react';

class Clock extends React.Component {
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.tick();
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    constructor(props){
        super(props);
        this.state = { time: new Date() };
    }
    render(){
        return(
            <div className="clock-wrapper">
                <h1>Clock</h1>
                <div className="clock">
                <p>
                    <span>Time:</span>
                    <span>{this.state.time.toLocaleTimeString()}</span>
                </p>
                <p>
                    <span>Date:</span>
                    <span>{this.state.time.toDateString()}</span>
                </p>
                </div>
            </div>
        )
    }
    // --------------------------------
    tick(){
        this.setState({time: new Date ()});
    }


}

export default Clock;
