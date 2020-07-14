import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
 
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
      <Breadcrumb>
        <BreadcrumbItem>
        <Link to='/menu'>Menu</Link>
        </BreadcrumbItem>
    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr/>
      </div>
     </div>
     
      <div className="row">
      <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h2>Comments</h2>
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
    )
    }
    else
      return <div></div>

 }
   

export default DishDetail;
