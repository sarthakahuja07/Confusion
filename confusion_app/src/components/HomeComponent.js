import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import LoadingComponent from './LoadingComponent'
import baseUrl from '../shared/baseUrl'


function RenderCard(props) {

    return (
        <Card>
            <CardImg src={baseUrl + props.item.image} alt={props.item.name} />
            <CardBody>
                <CardTitle>{props.item.name}</CardTitle>
                {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null}
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {

    var isLoading = (props.isDishLoading || props.isLeaderLoading || props.isPromotionLoading);
    var err= (props.dishErr + props.leaderErr + props.promotionErr)

    if(isLoading) {
        console.log();
		return (
			<div className="container">
                <div className="row align-items-start">
                    <LoadingComponent/>
                </div>
            </div>
		)
	} else if (props.err != null) {
		return (
			<h4>{props.err}</h4>
		)
	} else {
        return (
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} />
                    </div>
                </div>
            </div>
        );
	}
   
}

export default Home;