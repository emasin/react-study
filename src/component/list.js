import React from "react";
import ListText from "../component/list-text";
import ListItem from "./list-item";
class List extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <>
            <div style={{padding:'32px'}}>
                <ListText/>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >

                        {data.map((contact, i) => {
                        return (
                        <ListItem index={i} data={contact}></ListItem>
                            )
                        })};
                    </div>
                </div>
            </div>
            <div style={{padding:'32px'}}>
                <ListText/>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >

                        {data.map((contact, i) => {
                            return (
                                <ListItem index={i} data={contact}></ListItem>
                            )
                        })};
                    </div>
                </div>
            </div>
            <div style={{padding:'32px'}}>
                <ListText/>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >

                        {data.map((contact, i) => {
                            return (
                                <ListItem index={i} data={contact}></ListItem>
                            )
                        })};
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default List;