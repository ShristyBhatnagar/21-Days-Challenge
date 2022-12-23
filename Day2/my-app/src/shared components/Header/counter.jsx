import React, { Component } from 'react'
import './Header.css'
class MyComp extends Component {
    state = { 
        count:0
     } ;
    render() { 
        return <><span>{this.dynamicCount()}</span></>;
    }
    dynamicCount(){
        const {count}=this.state;
        return count === 0 ? "Zero": count;
     }
    
}




export default MyComp;