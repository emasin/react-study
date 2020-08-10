import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions";
import Card from "react-bootstrap/Card";

class Detail extends React.Component {
    componentDidMount() {
        this.props.loadContentDetail(this.props.match.params.name);
    }

    render() {
        const {detailData,loadContentDetail} = this.props;


        console.log(detailData);
        return (
            <div className="wrapper">

                <div style={{
                    backgroundColor:'#fff'
                }}>
                    <Card.Img variant="top" title="커리큘럼 이미지" src={detailData.img}/>
                   <span style={{color:'#000'}}>  {detailData.title} 상세</span>

                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        detailData: state.detailData,
        loadContentDetail : state.loadContentDetail

    };

};

export default connect(mapStateToProps, actionCreators)(Detail); ;