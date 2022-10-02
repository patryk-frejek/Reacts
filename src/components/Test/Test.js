import React from 'react';
import './test.css'

class Test extends React.Component {
    constructor(){
        super();
        this.state = "link1";
    }
    render(){
        return(
            <div>
                <p> {this.link}</p>
            </div>


        );
    };

}
export default Test;