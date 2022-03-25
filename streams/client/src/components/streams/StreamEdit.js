import _ from 'lodash';
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = () => {
    const { id } = useParams();

    const stream = useSelector(state => state.streams[id]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStream(id));
    }, []);

    const onSubmit = (formValues) => {
        dispatch(editStream(id, formValues));
    };

    if (!stream) {
        return 'Loading';
    }

    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm
                initialValues={_.pick(stream, 'title', 'description')}
                onSubmit={onSubmit}
            />
        </div>
);
};


export default StreamEdit;