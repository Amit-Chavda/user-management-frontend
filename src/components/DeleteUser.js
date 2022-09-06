
import Button from 'react-bootstrap/Button';

export default function DeleteUser(props) {
    let handleOnDelete = props.handleOnDelete
    return (
        <Button style={{ margin: '10px 0 0 94%' }} variant="danger" onClick={handleOnDelete}>Delete</Button>
    );
}