/*

function CompoB(props){
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h3>eName={props.eDetails.name}</h3>
        <h3>empId={props.eDetails.id}</h3>
        <h4>{props.arrElements[2]}</h4>
        
    </div>
}
export default CompoB   */


import React from 'react'

class CompoB extends React.Component{
    render(props){
        return <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>eName={this.props.emp.name}</h4>


        </div>
    }
}
export default CompoB         