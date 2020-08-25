
import React, { useState } from 'react';
import Modal from "./Modal";
import Text from "antd/lib/typography/Text";

const Movie = (props) => {

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
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
                <Text>{props.props.title}</Text>
                <Modal
                    containerName={"modalContainer " + (modal ? "show" : "hide")}
                    name={props.props.title}
                    overview={props.props.overview}
                    show={modal}
                    img={props.props.backdrop_path}
                    onClick={() => closeModal()}
                />
            </div>
        </>
    )
}

export default Movie;