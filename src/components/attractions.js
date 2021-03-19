import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";

const Attraction = props => (<div className="container col-md-4 d-flex">
<div className="card ">
<img className="card-img-top" id="" src={props.attraction.image}  alt=""/>
<div className="card-body">
   <h4 className="card-title">{props.attraction.name}</h4>
   <h5>{props.attraction.address}{props.attraction.city} {props.attraction.state} {props.attraction.zipcode}</h5>
   <p className='card-text'>{props.attraction.description}</p>
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
        
//       <div className="text-center">
//         <h1>Family Fun in Cincy!</h1>
//         <span >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, nesciunt illum tempore eius quam fugiat odio sapiente totam excepturi, vitae odit exercitationem corporis voluptatibus et modi. Saepe fuga sint quod, iusto deleniti voluptates ad obcaecati quae vel maxime eos, non at quia id aspernatur sequi! Saepe eligendi doloremque mollitia eos.</span>
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
//       { this.Attractions() }
//     </tbody>
//   </table>
// </div>

);
}
}
