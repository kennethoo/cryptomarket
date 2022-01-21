import React, {Component} from "react";

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from "recharts"
import {format,parseISO,subDay} from "date-fns"
class Chatboxx extends Component {
state ={
data:[
    {
        "date": "2121-06-12",
        "value": 2
    },
    
    {
        "date": "2121-06-15",
        "value":1
    },
    {
        "date": "2121-06-17",
        "value":10
    },
    {
        "date": "2121-06-18",
        "value":5
    },
    {
        "date": "2121-06-19",
        "value":14
    },
    

    
   
]
 }

    render(){
        return(
            <div className="rnjenwrjj3j">
                     <ResponsiveContainer width="100%" height="100%">
<AreaChart data={this.state.data}>
<defs>
    <linearGradient id="color"  x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stopColor="#6f56e5" stopOpacity={0.4}/>
<stop offset="75%" stopColor="#6f56e5" stopOpacity={0.05}/>
    </linearGradient>
</defs>
<Area dataKey="value" stroke="#6f56e5"  fill="url(#color)"/>
<XAxis 
dataKey="date"
    axisLine={false}
    tickLine={false }

/>

<YAxis dataKey="value" 
axisLine={false}
 tickLine={false}
tickCount={8}
tickFormatter={(number)=>`$${number.toFixed(2)}`}
/>
<Tooltip/>
<CartesianGrid opacity={0.1} vertical={false}/>
</AreaChart>
           </ResponsiveContainer>

         <div className="idhgijkgjg">
             <div>How do you feel about {this.props.data.name} today?</div>
             <div>🙁 😄</div>
         </div>
            </div>
      
        )
    }
}

export default Chatboxx