import React, { Component } from 'react';
import axios from 'axios';

const Shop = props => (
  <tr>
    <td>{props.shop.name}</td>
    <td>{props.shop.description}</td>
    <td><img src={props.shop.image} alt=""/></td>
    <td>{props.shop.address}</td>
    <td>{props.shop.city}</td>
    <td>{props.shop.state}</td>
    <td>{props.shop.zipcode}</td>
  </tr>
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
        
      <div className="text-center">
        <h1>Best Shopping in Cincinnati!</h1>
        <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam, voluptatem neque tempora laudantium voluptas dicta, optio minus inventore voluptatibus rerum! Nisi ab ipsum doloribus vel eum veritatis velit voluptate deleniti nemo, ipsam aperiam consequuntur, minus aliquid ratione accusantium, distinctio omnis provident asperiores impedit earum. Vero enim culpa totam vitae.</span>
        <table className="table">
    <thead className="thead-light">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zipcode</th>
      </tr>
    </thead>
    <tbody>
      { this.shopLocal() }
    </tbody>
  </table>
</div>
      


    );
  }
}