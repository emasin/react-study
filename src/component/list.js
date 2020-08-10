import React from "react";
import Card from 'react-bootstrap/Card';
import ListItem from "./list-item";
class List extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="card-list">
                {data.map((contact, i) => {
                  return (
                   <ListItem index={i} data={contact}></ListItem>
                      )
                })};
            </div>
        )
    }
}

export default List;