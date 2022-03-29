import React, {useEffect} from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../Modal";
import { deleteStream, fetchStream } from "../../actions";


const StreamDelete = () => {
    const { id } = useParams();
    const history = useHistory();

    const stream = useSelector(state => state.streams[id]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStream(id));
    }, []);

    const onDelete = () => {
        dispatch(deleteStream(id));
    };

    const actions = (
        <>
            <button className="ui button negative" onClick={onDelete}>Delete</button>
            <Link className="ui button" to='/'>Cancel</Link>
        </>
    );

    const renderContent = (!stream) ? 'Are you sure you want to delete this stream?' : `Are you sure you want to delete the stream: ${stream.title}?`;

    return (
        <Modal
            title='Delete Stream'
            content={renderContent}
            actions={actions}
            onDismiss={() => history.push('/')}
        />
    );
};

export default StreamDelete;