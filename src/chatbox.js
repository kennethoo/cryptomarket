

import React, {Component} from "react";
import { MdAccountBalance ,MdWork,MdAttachMoney, MdChatBubble} from "react-icons/md";
import { RiChat4Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { CgLoadbar } from "react-icons/cg";
import { IoEllipsisVertical } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
class Chat extends Component{
  state={
open:false

  }

  handleClik=(data)=>{
      this.setState({
        open:data
      })
  }

  render(){
      return(
          <div className="efgshjk">
              <div onClick={()=>{this.handleClik(true)}} className="bublre">
<RiChat4Fill/>
              </div>
         <div className={`chat-boxnfkr ${this.state.open==true?"active":""}`}>
<div className="titl-tjetee">
<div className="firat-boxnf"> 
<div className="fnjek"><IoEllipsisVertical/></div>
</div>
<div className="firat-boxnf">
    <div onClick={()=>{this.handleClik(false)}} className="fnjek"><CgLoadbar/></div>
    <div  onClick={()=>{this.handleClik(false)}} className="fnjek"><VscChromeClose/></div>
</div>
</div>
            <div className="hat-sjjjjkgjtj">


                <div className="hat-jtjt" >
                    <div className="iocjkfkr"></div>
                    <div className="hoks-fjrj">
                   <div>Hello and welcome to EnyMarket! </div>
                   <div>My name is Anna and I am a virtual assistant that is currently learning
                    so please make sure to ask me simple questions or tap on one of the commonly
                     asked questions below.</div>
                    </div>
                </div>

<div className="fhjdiksfjk">
2FA Set up
</div>
<div className="fhjdiksfjk">
How do I sync my Eny⪡⪢Wallet?
</div>
<div className="fhjdiksfjk">
How do I compare different Assets or markets?
</div>
<div className="fhjdiksfjk">
How do I earn Eny⪡⪢Bits?
</div>
               
            </div>
            <div className="hold-the-chatpr">
                   <div className="chat0inpour">
                       <input placeholder="Message..." type="text"/>
                   </div>
               </div>
               </div>
             
          </div>
      )
  }
}
export default Chat

