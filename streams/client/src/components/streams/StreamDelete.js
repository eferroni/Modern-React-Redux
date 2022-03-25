import React, {useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
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
            <button className="ui button" onClick={() => history.push('/')}>Cancel</button>
        </>
    );

    return (
        <div>
            StreamDelete
            <Modal
                title='Delete Stream'
                content='Are you sure you want to delete this stream?'
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;