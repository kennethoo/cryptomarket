

import React, {Component} from "react";
import { AiFillCaretDown, AiFillCodeSandboxCircle, AiOutlineCheck} from "react-icons/ai";

class Droplong extends Component{
  state={
open:false,
choose:"Category",
slelected:[]
    }

    

handleList=(data)=>{
let list =[...this.state.slelected, data]
this.setState({
    slelected:list
})
}
handleChange=(data,two)=>{
this.setState({
    open:two,
choose:data
})

 }
 
render(){
    return(
        <div  className="fjerjjjne">
        <div className={`wrpathe-filter-rjrke  ${this.state.open==true?"active":""}`}>
          <div onClick={()=>{this.handleChange("Category",true)}} className="liasrt ">
          <p>{this.state.choose} </p>
          <div className="hrhhr"><AiFillCaretDown/></div>
          </div>
          <div className="wropairrjr">
          <div onClick={()=>{this.handleChange("All",false)}} className="liasrt">All </div>
          <div onClick={()=>{this.handleChange("Social Impact",false)}} className="liasrt">Social Impact
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div onClick={()=>{this.handleChange("Cryptos",false)}} className="liasrt">Cryptos
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div>
          </div>
          <div onClick={()=>{this.handleChange("Stocks",false)}} className="liasrt">Stocks
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          
          <div onClick={()=>{this.handleChange("Commodities",false)}} className="liasrt">Commodities
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Forex",false)}} className="liasrt">Forex
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("NFTs",false)}} className="liasrt">NFTs
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Bonds",false)}} className="liasrt">Bonds
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Futures",false)}} className="liasrt">Futures
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("ETFs",false)}} className="liasrt">ETFs
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
       
          <div  onClick={()=>{this.handleChange("Cannabis",false)}} className="liasrt">Cannabis
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Derivatives",false)}} className="liasrt">Derivatives
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Cannabis",false)}} className="liasrt">Cannabis
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Derivatives",false)}} className="liasrt">Derivatives
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Cannabis",false)}} className="liasrt">Cannabis
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Investor",false)}} className="liasrt">Investor
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Tech",false)}} className="liasrt">Tech
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Exchange",false)}} className="liasrt">Exchange
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Founder",false)}} className="liasrt">Founder
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Law & Politics",false)}} className="liasrt">Law & Politics
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Media; Data & Research",false)}} className="liasrt">Media; Data & Research
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("Adoption",false)}} className="liasrt">Adoption
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          <div  onClick={()=>{this.handleChange("DeFi",false)}} className="liasrt">DeFi
          <div className="selxfrir">
              <div className="bxo">
                  <AiOutlineCheck/>
              </div>
          </div></div>
          
     

          </div>
         
        
        </div>
        </div>
    )
}
}


export default Droplong