
import React, { useState } from 'react';

import Text from "antd/lib/typography/Text";

const Detail = (props) => {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            <div className="movie" onClick={() => showModal()}>
                <Text>{props.props.email}</Text>
                <Text>{props.props.contents}</Text>

            </div>
        </>
    )
}

export default Detail;