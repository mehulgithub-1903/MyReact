import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {  
componentDidMount(){
  console.log('DishDetail Component mount Invoked');
}
componentDidUpdate(){
  console.log('DishDetail Component updated');
}
  renderDish(dish){
    return(
      <div className="col-12 col-md-5 m-1">
           <Card>
             <CardImg top src={dish.image} alt={dish.name}/>
             <CardBody>
               <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
             </CardBody>
           </Card>
         </div>
    )
  }
  renderComments(dish){
    if(dish !=null ){
      const commentList = dish.comments.map((item,i) => (
        <li key={i}>
          {item.comment}
          <br />
          <br />
          -- {item.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(new Date(Date.parse(item.date)))}
          <br />
          <br />
        </li>
      ));

      return (
        <div className="col-12 col-md-5 m-1">
          <h2>Comments</h2>
          <ul>{commentList}</ul>
        </div>
      )
    }else{
      return <div></div>
    }
  }

  render() {
    console.log('DishDetail Component render Invoked');
    
      if(this.props.dish != null){
      return(  
      <div className="container">
        <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish)}
        </div>
      </div>
      )
      }
      else
        return <div></div>
    }
  }
  

export default DishDetail;
