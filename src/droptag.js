

import React, {Component} from "react";
import { AiFillCaretDown, AiFillCodeSandboxCircle } from "react-icons/ai";
import { BsChevronDown,BsChevronUp } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { AiFillPieChart } from "react-icons/ai";
import { FaCity } from "react-icons/fa";
class Droptags extends Component{
  state={
open:false
    }


handleChange=()=>{
this.setState({
    open: ! this.state.open 
})
 }
 
render(){
    return(
        <div  className={`tttrtgrg ${this.state.open?"active":""}`}>
        <div onClick={()=>{this.handleChange()}} className="tekktkr">
            <p>{this.props.title}</p>
            <div className='jdjggj'>
            {this.state.open? <BsChevronUp/>:<BsChevronDown/>}
            </div>
        </div>
        <div className="fkme">
        {this.props.data?.map((item,index)=>{
            return(
                <div className="ekjkrn" key={index}>
            {item.logo?<div className="tj3eot"><img src={item.logo}/></div>:""}
            {item.link? <a href={item.link} target="_self"> {item.name}</a>:item.name}

</div>
            )
        })}

  

        </div>
        </div>
    )
}
}


export default Droptags