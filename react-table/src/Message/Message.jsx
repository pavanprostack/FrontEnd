import React from 'react'

class Message extends React.Component{
    state = {
        salary : 30000
    }
    updateHandler=(value)=>{
        this.setState({salary:value})
    }

    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>EmplyeeName={this.state.salary}</h3>
            <button onClick={this.updateHandler.bind(this,"7000")}>GM</button>&nbsp;
            <button onClick={this.updateHandler.bind(this,"4000")}>GA</button>&nbsp;
            <button onClick={this.updateHandler.bind(this,"5000")}>GE</button>&nbsp;
            <button onClick={this.updateHandler.bind(this,"6000")}>GN</button>&nbsp;

        </div>
    }
}
export default Message