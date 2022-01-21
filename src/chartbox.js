import React, {Component} from "react";

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
class Chartbox extends Component {
state ={
data:[

   
]
 }
componentDidMount=()=>{
    console.log()
}
    render(){
        return(

            <Sparklines  limit={100} width={200} height={20} data={[...this.props.data.price]}>
    <SparklinesLine  color="#2451b7"  />
    <SparklinesSpots />
</Sparklines>


     
        )
    }
}

export default Chartbox