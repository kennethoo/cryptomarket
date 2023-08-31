import React, { Component } from "react";
import one from "./one.jpeg";
import two from "./two.jpeg";
import three from "./three.jpeg";
import four from "./four.jpeg";
import five from "./five.jpeg";
import logo from "./logo.png";
import video from "./video.mp4";
import logoo from "./image/LOGO.jpg";
import { IoNotifications } from "react-icons/io5";
import Droptags from "./droptag";
import { BiMapPin, BiMobileAlt } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import { Link } from "react-router-dom";
import Theme from "./Components/Theme";
import { VscDebugDisconnect } from "react-icons/vsc";
import { FiChevronRight } from "react-icons/fi";
import { GrClose, GrNodes } from "react-icons/gr";
import { RiEqualizerLine, RiDropboxLine, RiSwapFill } from "react-icons/ri";
import darkLogo from "./image/darkImage.png";
import whiteLogo from "./image/white.png";
import {
  MdAccountBalance,
  MdWork,
  MdAttachMoney,
  MdChatBubble,
} from "react-icons/md";
import { GiRank3 } from "react-icons/gi";
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
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BsGrid1X2Fill,
  BsStar,
  BsCaretDownFill,
  BsDiamond,
  BsTriangle,
} from "react-icons/bs";
import {
  AiFillCaretDown,
  AiFillFolder,
  AiOutlineStar,
  AiFillStar,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillPieChart,
} from "react-icons/ai";
class Nav extends Component {
  state = {
    openNav: false,
  };
  handlenav = (data) => {
    this.setState({
      openNav: data,
    });
  };

  render() {
    const mode = localStorage.getItem("mode");
    const isDark = mode && mode === "dark";
    return (
      <div className="fheshtrfebrf">
        <div className="hold-tnt-hederdrrr">
          <div className="wrasprjtj">
            <Link to={"/"} className="nam4jrjrj gkejlrfrf">
              <img src={isDark ? whiteLogo : darkLogo} />
            </Link>
          </div>
          <div className="wrapeer-shtejophfjj">
            <div className="sjoforjek">
              <div className="wifjrkr">Assets</div>
              <div className="hosnfjn">
                <div className="jolshjfkrj">
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <GiRank3 />
                    </div>
                    Ranking
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <AiOutlinePlus />
                    </div>
                    Recently Added
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <MdAccountBalance />
                    </div>
                    Legal tender
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <GoLightBulb />
                    </div>
                    Spotlight
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <BsCaretDownFill />
                    </div>
                    Gainers & Losers Historical
                  </div>
                </div>
              </div>
            </div>

            <div className="sjoforjek">
              <div className="wifjrkr">Marketplace</div>

              <div className="hosnfjn">
                <div className="jolshjfkrj">
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <BsDiamond />
                    </div>
                    Spot
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <BsTriangle />
                    </div>
                    Derivatives
                  </div>

                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <RiDropboxLine />
                    </div>
                    Dex
                  </div>
                </div>
              </div>
            </div>

            <div className="sjoforjek">
              <Link to={"/people"} className="wifjrkr">
                People
              </Link>
              <div className="hosnfjn">
                <div className="jolshjfkrj"></div>
              </div>
            </div>

            <div className="sjoforjek">
              <div className="wifjrkr">Apps</div>

              <div className="hosnfjn">
                <div className="jolshjfkrj">
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <FaMapMarkerAlt />
                    </div>
                    <a href="/map" target="_blank">
                      {" "}
                      Relation Map
                    </a>
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <FaCity />
                    </div>
                    <a href="/city" target="_blank">
                      {" "}
                      City View
                    </a>
                  </div>

                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <img src="https://pbs.twimg.com/profile_images/1395127204590374921/-cv5986X.png" />
                    </div>
                    <a
                      href="https://txstreet.com/?__cf_chl_jschl_tk__=pmd_Vrj8ICp_iiNY_tnB_8S7Bfz3YAuHEb7mqKQ5z.6X8Xs-1629922223-0-gqNtZGzNAdCjcnBszQeR
"
                      target="_blank">
                      {" "}
                      Txstreet
                    </a>
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <RiSwapFill />
                    </div>
                    Swap
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <FaExchangeAlt />
                    </div>
                    Calculator
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <BiMobileAlt />
                    </div>
                    Mobile App
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <GrNodes />
                    </div>
                    BlockChain Explorer
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <BiMapPin />
                    </div>
                    Interest Tracker
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <MdWork />
                    </div>
                    Jobs Board
                  </div>
                </div>
              </div>
            </div>

            <div className="sjoforjek">
              <div className="wifjrkr">Portofilio</div>
            </div>

            <div className="sjoforjek">
              <div className="wifjrkr">Learn</div>
              <div className="hosnfjn">
                <div className="jolshjfkrj">
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <FaBook />
                    </div>
                    Eny University
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <MdAttachMoney />
                    </div>
                    Earn
                  </div>
                  <div className="holsn-the-shkks">
                    <div className="jrjjjr">
                      <FaMapMarkedAlt />
                    </div>
                    Market Updates
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fjekj">
            <Theme triger={this.props.triger} />
            <div className="holt-hosjrrkr">
              <p>Connect</p>
              <img src={logo} />
              <p>Wallet</p>
            </div>
          </div>

          <button
            onClick={() => {
              this.handlenav(true);
            }}
            className="hanmber-snjr">
            <GiHamburgerMenu />
          </button>
        </div>

        <div
          className={`side-barrwieir ${
            this.state.openNav == true ? "active" : ""
          }`}>
          <div className="nam4jrrwjrjrr">
            <div className="nam4jrjrj gkejlrfrf">
              <img src={logoo} />
            </div>
            <button
              onClick={() => {
                this.handlenav(false);
              }}
              className="hanmber-snjr">
              <GrClose />
            </button>
          </div>

          <Droptags
            active={true}
            title={"Assets"}
            data={[
              {
                name: "Ranking",
                logo: "https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180801851/106962339-rank-vector-icon-isolated-on-transparent-background-rank-logo-concept.jpg",
              },
              {
                name: "Recently  Added",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png",
              },
              {
                name: "Legal Tender",
                logo: "https://www.coinweek.com/wp-content/uploads/2014/11/silver_bulliion_3.gif",
              },
              {
                name: "Spotlight ",
                logo: "https://images-platform.99static.com//JwgWTWeM5iq_GicUvJZC18yw-7Y=/227x242:1765x1780/fit-in/500x500/99designs-contests-attachments/102/102675/attachment_102675282",
              },
              {
                name: "Gainers & Losers Historical Snapshot",
                logo: "https://thumbs.dreamstime.com/z/profit-statistics-icon-earning-growth-chart-well-organized-fully-editable-profit-statistics-icon-earning-growth-chart-icon-172142177.jpg",
              },
            ]}
          />
          <div className="sjoforjekr">
            <Link to={"/people"} className="rrrr">
              People
            </Link>
            <div className="hosnfjn">
              <div className="jolshjfkrj"></div>
            </div>
          </div>

          <div className="nam4jrjrj"></div>
          <Droptags
            active={true}
            title={"Exchanges"}
            data={[
              {
                name: "Spot",
                logo: "https://images-platform.99static.com//ULa0Z3jPvjigmxeII09m2Tx8nas=/48x4848:1150x5954/fit-in/590x590/99designs-contests-attachments/110/110236/attachment_110236501",
              },
              {
                name: "Derivatives",
                logo: "https://thumbs.dreamstime.com/z/derivatives-icon-trendy-logo-concept-white-backg-background-business-collection-suitable-use-web-apps-mobile-print-131187742.jpg",
              },
              {
                name: "Dex",
                logo: "https://images.samsung.com/apps/hubble/samsung-dex/common/samsungdex_logo.svg",
              },
            ]}
          />
          <Droptags
            active={true}
            title={"Visuals"}
            data={[
              {
                link: "/map",
                name: "Relation Map",
                logo: "https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png",
              },

              {
                link: "/city",
                name: "City View",
                logo: "https://thumbs.dreamstime.com/b/new-york-city-transparent-skyline-silhouette-usa-overlapping-buildings-41748851.jpg",
              },
              {
                name: "Charts View",
                logo: "https://e7.pngegg.com/pngimages/278/353/png-clipart-statistics-chart-computer-icons-symbol-circle-circle-graph-logo-graph-of-a-function.png",
              },
              {
                name: "txstreet",
                logo: "https://pbs.twimg.com/profile_images/1395127204590374921/-cv5986X.png",
                link: "https://txstreet.com/?__cf_chl_jschl_tk__=pmd_Vrj8ICp_iiNY_tnB_8S7Bfz3YAuHEb7mqKQ5z.6X8Xs-1629922223-0-gqNtZGzNAdCjcnBszQeR",
              },
            ]}
          />
          <Droptags active={true} title={"Portofilio"} data={[]} />
          <Droptags
            title={"Products"}
            data={[
              {
                name: "Swap",
                logo: "https://cdn.dribbble.com/users/3870213/screenshots/6848490/swap.png",
              },
              {
                name: "Calculator",
                logo: "https://www.pinclipart.com/picdir/middle/35-355669_convert-hub-is-a-free-online-image-converter.png",
              },
              {
                name: " Mobile App",
                logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSec8uSrNEF_X7W3CFaK-DvF0sdMg9L0yWvg&usqp=CAU",
              },
              {
                name: "BlockChain Explorer",
                logo: "https://t4.ftcdn.net/jpg/01/03/74/91/360_F_103749172_qGwrVG2PU827bn8Dgutin2uw5BzzC12t.jpg",
              },
              {
                name: "Interest Tracker",
                logo: "https://thumbs.dreamstime.com/b/icon-interest-hobby-interest-149135099.jpg",
              },
              {
                name: "Jobs Board",
                logo: "https://cdn.dribbble.com/users/753928/screenshots/6071511/jobboard.jpg",
              },
            ]}
          />
          <Droptags
            active={true}
            title={"Learn"}
            data={[
              { name: "Eny University" },
              { name: "Earn" },
              { name: "Market Updates" },
            ]}
          />
          <div className="holt-hosjrkr">
            <p>Connect</p>
            <img src={logo} />
            <p>Wallet</p>
          </div>
          <div className="button-nsnnr">
            <button>Create account</button>
          </div>

          <div className="fountett">
            <div>Disclaimer</div>
            <div>Resquest Form</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>About</div>
          </div>

          <div className="socilameid-bar">
            <div className="rfjketnr">
              <FaTwitter />
            </div>
            <div className="rfjketnr">
              <FaFacebookSquare />
            </div>
            <div className="rfjketnr">
              <FaTelegramPlane />
            </div>
            <div className="rfjketnr">
              <FaLinkedin />
            </div>
            <div className="rfjketnr">
              <FaInstagram />
            </div>
            <div className="rfjketnr">
              <FaReddit />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
