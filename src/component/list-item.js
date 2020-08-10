import React from "react";
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
class ListItem extends React.Component {

    render() {
        const data = this.props.data;
        const link  = '/detail/' + this.props.index;
        function goDetail(){

        }
        return (
                    <Link to={link} >
                        <Card key={this.props.index} style={{width: '18rem', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 5px #ccc', margin:'10px'}}>

                                <Card.Img variant="top" title="커리큘럼 이미지" src={data.img}/>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.cont}</Card.Text>
                                    <Card.Text>
                                        <small className="text-muted">{data.smtxt}</small>
                                    </Card.Text>
                                </Card.Body>

                        </Card>
                    </Link>

        )
    }
}

export default ListItem;