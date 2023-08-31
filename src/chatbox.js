import React, { Component } from "react";
import {
  MdAccountBalance,
  MdWork,
  MdAttachMoney,
  MdChatBubble,
} from "react-icons/md";
import { RiChat4Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { CgLoadbar } from "react-icons/cg";
import { IoEllipsisVertical } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import imageChat from "./image/signal-2023-05-15-235405.d37176ca.jpeg";
class Chat extends Component {
  state = {
    open: false,
  };

  handleClik = (data) => {
    this.setState({
      open: data,
    });
  };

  render() {
    return (
      <div className="efgshjk">
        <div
          onClick={() => {
            this.handleClik(true);
          }}
          className="bublre">
          <RiChat4Fill />
        </div>
        <div
          className={`chat-boxnfkr ${this.state.open == true ? "active" : ""}`}>
          <div className="titl-tjetee">
            <div className="firat-boxnf">
              <div className="fnjek">
                <IoEllipsisVertical />
              </div>
            </div>
            <div className="firat-boxnf">
              <div
                onClick={() => {
                  this.handleClik(false);
                }}
                className="fnjek">
                <CgLoadbar />
              </div>
              <div
                onClick={() => {
                  this.handleClik(false);
                }}
                className="fnjek">
                <VscChromeClose />
              </div>
            </div>
          </div>
          <div className="hat-sjjjjkgjtj">
            <img src={imageChat} />
          </div>
          <div className="hold-the-chatpr">
            <div className="chat0inpour">
              <input placeholder="Search..." type="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
