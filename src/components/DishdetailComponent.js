import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

 
function RenderDish(props) {
  return (
    <Card>
      <CardImg top src={props.dish.image} alt={props.dish.name} />
      <CardBody>
        <CardTitle>{props.dish.name}</CardTitle>
        <CardText>{props.dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments(comments){
  return comments.comments.map((comment, i) => (
    <li key={i} className="commentList">
      {comment.comment}
      <br />
      <br />
      -- {comment.author},
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(Date.parse(comment.date)))}
      <br />
      <br />
    </li>
  ));
}

 const DishDetail = (props) => {
  if(props.dish != null){
    return(  
    <div className="container">
      <div className="row">
      <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h2>Comments</h2>
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    </div>
    )
    }
    else
      return <div></div>

 }
   

export default DishDetail;
