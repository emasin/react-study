import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import ssr from "../component/ssr";


class SsrTestContainer extends React.Component {

    componentDidMount() {
        this.props.loadSsr();
    }

    render() {

        const {data} = this.props;
        return (
            <>
                <ssr data={data}></ssr>
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        data: state.ssr,
        loadSsr: state.loadSsr
    };

};

export default connect(mapStateToProps, actionCreators)(SsrTestContainer);