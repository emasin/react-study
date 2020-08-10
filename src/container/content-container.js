import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"

import List from "../component/list";
import '../css/style.css'


class ContentContainer extends React.Component {

    componentDidMount() {
        this.props.loadContent();
    }

    render() {

        const {data, loadContent} = this.props;
        return (
            <>
                <List data={data}></List>
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        data: state.data,
        loadContent: state.loadContent
    };

};

export default connect(mapStateToProps, actionCreators)(ContentContainer);