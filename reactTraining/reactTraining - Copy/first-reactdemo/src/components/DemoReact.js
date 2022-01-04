import React from 'react';
import class1 from './myStyles.css';

const DemoReact=()=>{
    //jsx code is easier
    // return (
    //     <div>
    //         <h1>HTC Global Services.</h1>
    //     </div>
    // )

    // return React.createElement(element,styles property,values to display);
    return React.createElement('div',null,React.createElement('h1',{id:'content1',className:'class1'},'Htc Global Services'));

}

export default DemoReact