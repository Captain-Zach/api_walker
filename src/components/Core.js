import React, { Component } from 'react';

class Core extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    infoPull(){

    }

    render() { 
        // const {}
        return ( 
            <div>
                {this.props.cat == "planets"?<div>Planets!</div>:null}
                {this.props.cat == "people"? <div>People!</div>:null}
            </div>
            
         );
    }
}
 
export default Core;