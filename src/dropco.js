

import React, {Component} from "react";
import { AiFillCaretDown, AiFillCodeSandboxCircle } from "react-icons/ai";
import logo from './logo.png';
class Dropco extends Component{
  state={
open:false,
choose:"BTC"
    }


handleChange=(data,two)=>{
this.setState({
    open:two,
choose:data
})

 }
 
render(){
    return(
        <div  className="fjerjjjfhrne">
        <div className={`wrpathe-filter-rjrtjtjke  ${this.state.open==true?"active":""}`}>
          <div onClick={()=>{this.handleChange("BTC",true)}} className="liasrt ">
          <p>{this.state.choose}</p>
          <div className="hrhhr"><AiFillCaretDown/></div>
          </div>
          <div className="wropairrjr">
          <div onClick={()=>{this.handleChange("Sats",false)}} className="liasrt">Sats</div>
          <div onClick={()=>{this.handleChange("Bits",false)}} className="liasrt">Bits</div>
          <div onClick={()=>{this.handleChange("Eny bits",false)}} className="liasrt">Eny <img src={logo}/> Bits</div>

          </div>
         
        
        </div>
        </div>
    )
}
}


export default Dropco