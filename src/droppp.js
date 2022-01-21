

import React, {Component} from "react";
import { AiFillCaretDown, AiFillCodeSandboxCircle } from "react-icons/ai";
class Dropppp extends Component{
  state={
open:false,
choose:"Bitcoin",
chooseT:"BTC"
    }


handleChange=(data,two,datar)=>{
this.setState({
    open:two,
choose:data,
chooseT:datar
})

 }
 
render(){
    return(
        <div  className="fjerjjjne">
        <div className={`wrpathe-filter-rjrke  ${this.state.open==true?"active":""}`}>
          <div onClick={()=>{this.handleChange("Bitcoin",true,"BTC")}} className="liasrt ">
          <p>{this.state.choose} </p>
          <p>{this.state.chooseT}</p>
          <div className="hrhhr"><AiFillCaretDown/></div>
          </div>
          <div className="wropairrjr">
          <div onClick={()=>{this.handleChange("Ethereum",false,"ETH")}} className="liasrt">Ethereum
        <span>ETH</span>
          </div>
        
     

          </div>
         
        
        </div>
        </div>
    )
}
}


export default Dropppp