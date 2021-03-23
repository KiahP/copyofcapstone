import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";


const Shop = props => (

  <div className="card mb-3 card-style">
  <div className="row g-25">
  <div className="col-md-4">
<img className="shopattractimg" src={props.shop.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.shop.name}</h4>
   <p className='card-text'>{props.shop.description}</p>
   <p>{props.shop.address} {props.shop.city} {props.shop.state} {props.shop.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>

)

export default class shopLocal extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {shops: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/shop/')
     .then(response => {
       this.setState({shops: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  shopLocal() {
    return this.state.shops.map(currentshop => {
      return <Shop shop={currentshop} key={currentshop._id}/>;
    })
  }
  render() {
    return (
    
      



      <div>

      
      <header id="header-section-shop">
      <div className="container-fluid shoptophead">
      <div className="header-text">
      <p>Whether it’s luxury designer boutiques, concept shops or outlet malls.</p>
      </div>
      </div>
      </header>

      <div >
           { this.shopLocal()  }
                </div>
     

      </div>
     
      


    );
  }
}