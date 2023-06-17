import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, CardBody } from "reactstrap";
function RenderDish({dish}) {
    if (dish != null)
            return (
                <div className="col-12 col-md-6">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="over-img text-center">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardBody>{dish.description}</CardBody>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        else {
            return (
                <div></div>
            )
        }

  }

  function RenderComments({comments}) {
    
    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                </div>
            );
        });
        return (
            <div className="col-12 col-md-6 text-center">
                <h4> Comments </h4>
                <ul>
                    {comment}
                </ul>

            </div>
        )
    }

    else {
        return (
            <div></div>
        )
    }
    
  }

  const  DishDetail = (props) => {

    if (props.dish != null) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                </div>
            </div>
        )
    }


}
    
  

export default DishDetail;