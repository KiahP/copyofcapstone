import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";

const Attraction = props => (


  <div className="card mb-3 card-style ">
  <div className="row g-25">
  <div className="col-md-4">
<img className="shopattractimg" src={props.attraction.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.attraction.name}</h4>
   <p className='card-text'>{props.attraction.description}</p>
   <p>{props.attraction.address} {props.attraction.city}, {props.attraction.state} {props.attraction.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>

  
)

export default class Attractions extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {cincyAttractions: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/attraction/')
     .then(response => {
       this.setState({ cincyAttractions: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  Attractions() {
    return this.state.cincyAttractions.map(currentattraction => {
      return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
    })
  }
  render() {
    return (

      <div>

      
      <header id="header-section-shop">
      <div className="container-fluid attracttophead">
      <div className="header-text">
      <h2 className="bigger-font text-white">Attractions</h2>
      <p>Whether it’s luxury designer boutiques, concept shops or outlet malls.</p>
      </div>
      </div>
      </header>
      
      <div >
           { this.Attractions()  }
                </div>


      </div>
      

);
}
}
