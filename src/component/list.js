import React from "react";

import ListItem from "./list-item";
class List extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <>
            <div style={{overflow:'hidden',overflowX:'auto'}}>
            <div className="card-list" >

                {data.map((contact, i) => {
                  return (
                   <ListItem index={i} data={contact}></ListItem>
                      )
                })};
            </div>


            </div>


        <div style={{overflow:'hidden',overflowX:'auto'}}>
            <div className="card-list" >

                {data.map((contact, i) => {
                    return (
                        <ListItem index={i} data={contact}></ListItem>
                    )
                })};
            </div>


        </div>
                </>
        )
    }
}

export default List;