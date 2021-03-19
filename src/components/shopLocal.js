import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";


const Shop = props => (
  <div className="card ">
<img className="card-img-top" id="" src={props.shop.image}  alt=""/>
<div className="card-body">
   <h4 className="card-title">{props.shop.name}</h4>
   <h5>{props.shop.address}{props.shop.city} {props.shop.state} {props.shop.zipcode}</h5>
   <p className='card-text'>{props.shop.description}</p>
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
      <h2 className="bigger-font text-white">SHOPPING</h2>
      <p>Whether it’s luxury designer boutiques, concept shops or outlet malls.</p>
      </div>
      </div>
      </header>

      <div >
           { this.shopLocal()  }
                </div>
     

      </div>
     
        
//       <div className="text-center">


//         <h1>Best Shopping in Cincinnati!</h1>
//         <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam, voluptatem neque tempora laudantium voluptas dicta, optio minus inventore voluptatibus rerum! Nisi ab ipsum doloribus vel eum veritatis velit voluptate deleniti nemo, ipsam aperiam consequuntur, minus aliquid ratione accusantium, distinctio omnis provident asperiores impedit earum. Vero enim culpa totam vitae.</span>
//         <table className="table">
//     <thead className="thead-light">
//       <tr>
//         <th>Name</th>
//         <th>Description</th>
//         <th>Image</th>
//         <th>Address</th>
//         <th>City</th>
//         <th>State</th>
//         <th>Zipcode</th>
//       </tr>
//     </thead>
//     <tbody>
//       { this.shopLocal() }
//     </tbody>
//   </table>
// </div>
      


    );
  }
}