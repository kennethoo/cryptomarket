import React,{Component} from "react"
import Nav from "./nav"
import one from "./image/01.jpg"
import two from "./image/2.jpg"
import { ImFire } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import three from "./image/3.jpg"
import four from "./image/4.jpg"
import { AiFillYoutube,AiFillCaretDown ,AiFillFolder,AiOutlineStar,AiFillStar,AiOutlineSearch,AiOutlinePlus,AiFillPieChart,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";
import five from "./image/5.jpg"
import { CgClose } from "react-icons/cg";
import six from "./image/6.jpg"
import { VscGlobe } from "react-icons/vsc";
import seven from "./image/7.jpg"
import eight from "./image/8.jpg"
import nine from "./image/9.jpg"
import Dropppp from "./droppp"
import ten from "./image/10.jpg"
import eleven from "./image/11.jpg"
import twelve from "./image/12.jpg"
import threteen from "./image/13.jpg"
import fourteen from "./image/14.jpg"
import fithteen from "./image/15.jpg"
import sixteen from "./image/16.jpg"
import seventeen from "./image/17.jpg"
import eigthteen from "./image/18.jpg"
import nineteen from "./image/19.jpg"
import Droplong from "./droplong"
import tweny from "./image/20.jpg"
import twenyone from "./image/31.jpeg"
import twennytwo from "./image/22.jpg"
import twennythree from "./image/23.jpg"
import twennysix from "./image/26.jpeg"
import twennyseven from "./image/27.jpeg"
import twennyeigth from "./image/28.jpeg"
import twennynine from "./image/31.jpeg"
import thridd from "./image/30.jpeg"
import twwone from "./image/32.jpeg"
import twwthree from "./image/33.jpeg"
import twwfour from "./image/34.jpeg"
import twwfive from "./image/35.jpeg"
import twwsix from "./image/36.jpeg"
class People  extends Component{
    state={
        info:{
            name:"",
            tile:"",
            image:   require('./image/23.jpg')
        },
        open:false
    }
handlechange=()=>{
    console.log("clif")
    this.setState({
        open:!this.state.open
    })
}

    save=(data)=>{
        this.setState({
            info:data
        })
    }
    render(){
        return(
            <div className="people-wraprr">
<Nav/>

<div className="fjejnr">
<div className="titler">
People Move Markets
</div>

</div>
<div className="wsfbsf--ffhr">
<div className="cjfjnrhbrb">Filter list by:</div>
<div className="rhhr">
    <Droplong/>
</div>
</div>
<div className="wrarjrri">
<div className="box-people">


<div className="fnnbf">
<div className="boxnfej">
Si:<span>95</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>


    <div className="iconcfj">
    <img src={six} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Satoshi Nakamoto
    </div>
    <div  className="ffhshhfh">
    Creator of Bitcoin
    </div>
    </div>

    <div className="box-people">
  
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>92</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={eleven} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Vitalik Buterin
    </div>
    <div  className="ffhshhfh">
    Co-founder of Ethereum
    </div>
    </div>

<div onClick={this.handlechange} className="box-people">

<div className="fnnbf">
<div  className="boxnfej">
Si:<span>75</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={four} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Michael  Saylor
    </div>
    <div  className="ffhshhfh">
  Founder, Chairman & CEO of MicroStrategy
    </div>
    </div>

    <div className="box-people">
    
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>81</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={ten} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Caitlin Long 
    </div>
    <div  className="ffhshhfh">
    Founder and CEO of Avanti Financial Group
    </div>
    </div>
    <div className="box-people">
   
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>86</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={nine} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Sam Bankman-Fried 
    </div>
    <div  className="ffhshhfh">
    Founder and CEO of Alameda Research and FTX
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">

Si:<span>87</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={five} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Founder, Jack Dorsey
    </div>
    <div  className="ffhshhfh">
    CEO of Twitter Inc.
    </div>
    </div>
 
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>82</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>

    <div className="iconcfj">
    <img src={seven} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Cathie Wood
    </div>
    <div  className="ffhshhfh">
    CEO of Ark Invest
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>91</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={three} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Elon Musk
    </div>
    <div  className="ffhshhfh">
CEO of Tesla
    </div>
    </div>
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>75</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={eight} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Elizabeth Stark
    </div>
    <div  className="ffhshhfh">
    Lightning Labs CEO and co-founder
    </div>
    </div>

  

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>84</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>

    <div className="iconcfj">
    <img src={twelve} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Abigail Johnson 
    </div>
    <div  className="ffhshhfh">
    Chairman and CEO of Fidelity Investments
    </div>
    </div>


    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>81</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={threteen} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Anthony Pompliano 
    </div>
    <div  className="ffhshhfh">
    Co-founder and partner of Morgan Creek Digital
    </div>
    </div>


    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>71</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={fourteen} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Hayden Adams 
    </div>
    <div  className="ffhshhfh">
    Founder of Uniswap
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>80</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={one} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Michael Novogratz
    </div>
    <div  className="ffhshhfh">
CEO of Galaxy Digital
    </div>
    </div>
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>74</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={fithteen} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Andre Cronje 
    </div>
    <div  className="ffhshhfh">
    Independent DeFi developer and founder of Yearn.finance
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>73</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={sixteen} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Barry Silbert
    </div>
    <div  className="ffhshhfh">
    Founder and CEO of Digital Currency Group
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>77</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={seventeen} alt="Bike on a Roman street" ></img>
    </div>
    <div className="irlejrw">
    Kris Marszalek 
    </div>
    <div  className="ffhshhfh">
    Co-founder and CEO of Crypto.com
    </div>
    </div>
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>78</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={eigthteen} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Gavin Wood 
    </div>
    <div  className="ffhshhfh">
    Co-founder of Polkado
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>67</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={nineteen} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Brian Brooks
    </div>
    <div  className="ffhshhfh">
    Former acting comptroller of the currency of the U.S. Office of the Comptroller of the Currency
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>86</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={tweny} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Gary Gensler 
    </div>
    <div  className="ffhshhfh">
    Chairman of the U.S. Securities and Exchange Commission
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>74</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={twwone} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Alex Mashinsky 
    </div>
    <div  className="ffhshhfh">
    Co-founder, chairman and CEO of Celsius Network
    </div>
    </div>

 
 
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>68</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={twennyeigth} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Juan Benet
    </div>
    <div  className="ffhshhfh">
    Founder and CEO of Protocol Labs
    </div>
    </div>
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>65</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={twennyseven} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Ria Bhutoria 
    </div>
    <div  className="ffhshhfh">
    Director of research at Fidelity Digital Assets
    </div>
    </div>
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>71</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={twennysix} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Jesse Powell 
    </div>
    <div  className="ffhshhfh">
    Co-founder and CEO of Kraken
    </div>
    </div>
    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>69</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={twennynine} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Edward Moncada
    </div>
    <div  className="ffhshhfh">
    Co-founder of Blockfolio
    </div>
    </div>

    <div className="box-people">
    <div className="fnnbf">
    <div className="boxnfej">
Si:<span>82</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcfj">
    <img src={thridd} alt="Bike on a Roman street" id="bike"></img>
    </div>
    <div className="irlejrw">
    Jerome Powell
    </div>
    <div  className="ffhshhfh">
    Chair of the Federal Reserve of the United States
    </div>
    </div>
</div>


{this.state.open==true? <div className="wrapoiwrj">
<div className="popenkjdejje">
<div className="boxjxjx">
<div className="bannenenrn">
<div onClick={this.handlechange} className="boxnfj ffjkrj">
        <CgClose/>
    </div>
</div>
<div className="fjdkjf">
<div className="wrajffj">
    <div className="box-people">
    <div className="fnnbf">
<div className="boxnfej">
Si:<span>75</span>
    </div>
    <div className="boxnfj">
        <AiOutlineStar/>
    </div>
</div>
    <div className="iconcrfj">
    <img src={four}/>
    </div>
    <div className="irlejrw">
    Michael  Saylor
    </div>
    <div  className="ffhshhfh">
  Founder, Chairman & CEO of MicroStrategy
    </div>
    <div className="irlejrrw">
<div className="table-row">
    <div className="fjej">Age</div>
    <div>56</div>
</div>


<div className="table-row">
    <div className="fjej">Place of Birth</div>
 <div>
 Place of birth	Lincoln, NE
 </div>
</div>

<div className="table-row">
    <div className="fjej">Category</div>
 <div>
 Crypto, Tech, Founder, Advocate  
 </div>
</div>

<div className="table-row">
    <div className="fjej">Alma mater</div>
 <div>
Alma mater	Massachusetts Institute of Technology, SB Aeronautics & Astronautics, History of Science
Known for	</div>
</div>

    </div>
    <div  className="ffhshrrhfh">

    </div>
    </div>

    </div>
    <div className="wsxvh--eje">
    <div className="fhehf">
        <div>
            <VscGlobe/>
        </div>
        <div>
            <AiOutlineTwitter/>
        </div>
        <div>
            <AiFillLinkedin/>
        </div>
        <div>
            <AiFillYoutube/>
        </div>
    </div>
    <div className="fnesknro">
    <div className="table-rotttw">
    <div className="fjettthj">Known for : </div>
</div>
     <ul className="fieok">
         <div>
         <div>
         <ImFire/>
         </div>
       
        <span> American entrepreneur, the head of business intelligence firm MicroStrategy</span></div>
         <div>
         <div>
         <ImFire/>
         </div>
         <span> Inventor on more than 40 patents also credited as the inventor of relational analytics</span>
       </div>
         <div>
         <div>
         <ImFire/>
         </div>
        <span>Author of the book "The Mobile Wave: How Mobile Intelligence Will Change Everything"</span>
</div>
         <div>
         <div>
         <ImFire/>
         </div>
         <span> Established The Saylor Foundation, the foundation runs the Saylor Academy (Saylor.org), which offers free college education and continuing professional development courses to students worldwide.</span>
       </div>
 
     </ul>
    </div>

    <div className="wsfbsf--ffhr">
<div className="cjfjnrhbrb">Choose Assets:</div>
<div className="rhhr">
    <Dropppp/>
</div>
</div>
   

 <div className="sbbd-imsn-n">
    <div className="sjbfjr">
    <img src={twwthree}/>
    </div>
    <div className="sjbfjr">
    <img src={twwfour}/>
    <img src={twwfive}/>
    <img src={twwsix}/> 
    </div>
    
 </div>
    </div>
</div>

</div>

</div>

</div>:""}
            </div>
        )
    }
}

export default People