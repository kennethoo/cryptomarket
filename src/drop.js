

import React, {Component} from "react";
import { AiFillCaretDown, AiFillCodeSandboxCircle } from "react-icons/ai";
class Drop extends Component{
  state={
open:false,
choose:"Select Market"
    }


handleChange=(data,two)=>{
this.setState({
    open:two,
choose:data
})
this.props.handlefilter(data)
 }
 
render(){
    return(
        <div  className="fjerjjjne">
        <div className={`wrpathe-filter-rjrke  ${this.state.open==true?"active":""}`}>
          <div onClick={()=>{this.handleChange("Select Market",true)}} className="liasrt ">
          <p>{this.state.choose} </p>
          <div className="hrhhr"><AiFillCaretDown/></div>
          </div>
          <div className="wropairrjr">
          <div onClick={()=>{this.handleChange("All Asset",false)}} className="liasrt">All Asset</div>
          <div onClick={()=>{this.handleChange("Cryptos",false)}} className="liasrt">Cryptos</div>
          <div onClick={()=>{this.handleChange("Stocks",false)}} className="liasrt">Stocks</div>
          <div onClick={()=>{this.handleChange("Commodities",false)}} className="liasrt">Commodities</div>
          <div  onClick={()=>{this.handleChange("Forex",false)}} className="liasrt">Forex</div>
          <div  onClick={()=>{this.handleChange("Fiat Currencies",false)}} className="liasrt">NFTs</div>
          <div  onClick={()=>{this.handleChange("Fiat Currencies",false)}} className="liasrt">Bonds</div>
          <div  onClick={()=>{this.handleChange("Fiat Currencies",false)}} className="liasrt">Futures</div>
          <div  onClick={()=>{this.handleChange("Fiat Currencies",false)}} className="liasrt">ETFs</div>
          <div  onClick={()=>{this.handleChange("Fiat Currencies",false)}} className="liasrt">Derivatives</div>
          <div  onClick={()=>{this.handleChange("Fiat Currencies",false)}} className="liasrt">Cannabis</div>
     

          </div>
         
        
        </div>
        </div>
    )
}
}


export default Drop