import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import List from "../component/list";
import Tutor from "../component/tutor";
import '../css/style.css'


class ContentContainer extends React.Component {

    componentDidMount() {
        this.props.loadTopic1();
    }

    render() {
        const {data} = this.props;
        return (
            <>
                <List data={data}></List>

            </>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        data: state.topic1
    };

};


const mapDispatchToProps = (dispatch) => {
    return {
        loadTopic1(){
            dispatch(actionCreators.loadTopic1()) // 액션 메서드
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);