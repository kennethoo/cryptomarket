import { render } from "@testing-library/react";
import React, { Component } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdShareAlt } from "react-icons/io";
import Chatboxx from "./chatboxx";
import { HiOutlineArrowRight } from "react-icons/hi";
import logo from "./logo.png";
import { GrLogin } from "react-icons/gr";
import {
  AiFillCaretDown,
  AiFillFolder,
  AiOutlineStar,
  AiFillStar,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillPieChart,
} from "react-icons/ai";
import {
  FaTwitter,
  FaFacebookSquare,
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaReddit,
  FaRegFolder,
  FaCity,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaBook,
  FaMapMarkedAlt,
} from "react-icons/fa";
class Box extends Component {
  render() {
    return (
      <div
        className={`bild-0the-winfos ${
          this.props.openBox == true ? "active" : ""
        }`}>
        {this.props.data.id ? (
          <div className="rjfiektjkf">
            <div className="titl-tjeteee">
              <div className="firat-boxnf"></div>
              <div
                onClick={() => {
                  this.props.hanhdlePop(false, {});
                }}
                className="fnjerrk">
                <VscChromeClose />
              </div>
            </div>

            <div className="clai-hoxnf-irsojr-djns">
              <div className="bokd0-onjdf">
                <div className="cljgkjf">
                  <div className="fjekn">
                    <div className="fjrjrj">RanK #1</div>
                    <div className="fhjemn">
                      <AiFillStar />
                      <p>204004040 people like this</p>
                    </div>
                  </div>

                  <div className="fjekn">
                    <div className="fjenf">
                      <FaRegFolder />
                    </div>
                    <div className="fjenf">
                      <IoNotificationsSharp />
                    </div>
                    <div className="fjenf">
                      <AiOutlineStar />
                    </div>
                    <div className="fjenf">
                      <IoMdShareAlt />
                      <p>Share</p>
                    </div>
                  </div>
                </div>

                <div className="wrapriro">
                  <div className="homs-homkro-fjrf">
                    <div className="hold-fhjif">
                      <div className="titltkroeke">
                        <img src={this.props.data.image} />
                        <p>{this.props.data.id}</p>
                        {this.props.data.symbol ? (
                          <p className="fjejntj">{this.props.data.symbol}</p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="hoks-the-box">
                        ${this.props.data.current_price}
                      </div>
                      <div className="hoks0--smaol-toks">10000000000000</div>
                      <div className="rangeeokor">
                        <div className="ramfhejrj-fjf">
                          <div className="barrr"></div>
                        </div>
                        <div className="labeleee">
                          <div>$32,3455</div>
                          <div>24H Range</div>
                          <div>$33,417</div>
                        </div>
                      </div>

                      <div className="holf-the-barjddn">
                        <div className="tshjrr">
                          <div className="incokjjjf">Market Cap</div>
                          <div className="infojs-fjfj">
                            ${this.props.data.market_cap}
                          </div>
                        </div>
                        <div className="tshjrr">
                          <div className="incokjjjf">24 Hour Trading Vol</div>
                          <div className="infojs-fjfj">$4040404400</div>
                        </div>
                        <div className="tshjrr">
                          <div className="incokjjjf">Fully Diluted</div>
                          <div className="infojs-fjfj">
                            ${this.props.data.fully_diluted_valuation}
                          </div>
                        </div>
                        <div className="tshjrr">
                          <div className="incokjjjf">Circulating Supply</div>
                          <div className="infojs-fjfj">
                            ${this.props.data.circulating_supply}
                          </div>
                        </div>

                        <div className="tshjrr">
                          <div className="incokjjjf">Total Supply</div>
                          <div className="infojs-fjfj">
                            ${this.props.data.total_supply}
                          </div>
                        </div>
                        <div className="tshjrr">
                          <div className="incokjjjf">Max Supply</div>
                          <div className="infojs-fjfj">
                            ${this.props.data.max_supply}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="holf-the-chart">
                    <Chatboxx data={this.props.data} />
                  </div>
                </div>
              </div>

              <div className="ho-hfomfk0-boxbjfjfjjf">
                <div className="hoskns-fhosjr">
                  <button>Buy / Sell</button>
                  <button>Long / Short</button>
                  <button>Earn / Loan</button>
                  <button>Mine</button>
                </div>

                <div className="hsofnkrkrjkr">
                  <div className="nakmee">Website </div>
                  <div className="dtaya"> </div>
                </div>
                <div className="hsofnkrkrjkr">
                  <div className="nakmee">Explorers </div>
                  <div className="dtaya"> </div>
                </div>
                <div className="hsofnkrkrjkr">
                  <div className="nakmee">Wallet </div>
                  <div className="dtaya"> </div>
                </div>
                <div className="hsofnkrkrjkr">
                  <div className="nakmee">Community </div>
                  <div className="dtaya"> </div>
                </div>
                <div className="hsofnkrkrjkr">
                  <div className="nakmee">Source Code </div>
                  <div className="dtaya"> </div>
                </div>
                <div className="hsofnkrkrjkr">
                  <div className="nakmee">API id </div>
                  <div className="dtaya"> </div>
                </div>
                <div className="hsofnkrkrjkr">
                  <div className="nakmee">Tags </div>
                  <div className="dtaya"> </div>
                </div>
              </div>
            </div>

            <div className="button-exporrt">
              <button>
                Explore More
                <div>
                  <GrLogin />
                </div>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Box;
