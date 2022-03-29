import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";

const StreamShow = () => {
    const {id} = useParams();

    const stream = useSelector(state => state.streams[id]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStream(id));
    }, []);

    if (!stream) {
        return <div>Loading...</div>;
    };

    return (
        <div>
            <h1>{stream.title}</h1>
            <h5>{stream.description}</h5>
        </div>
    );
};

export default StreamShow;