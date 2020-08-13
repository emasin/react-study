import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import List from "../component/list";
import Tutor from "../component/tutor";
import '../css/style.css'


class TutorContainer extends React.Component {

    componentDidMount() {
        this.props.loadTutor();
    }

    render() {

        const {data} = this.props;
        return (
            <>

                <Tutor data={data}></Tutor>
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        data: state.data,
        loadTutor: state.loadTutor
    };

};

export default connect(mapStateToProps, actionCreators)(TutorContainer);