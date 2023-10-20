import PropTypes from 'prop-types';

const DeleteButton = ({ userId, handleDeleteUser }) => {
  return <button onClick={() => handleDeleteUser(userId)}>Delete</button>;
};

export default DeleteButton;

DeleteButton.propTypes = {
  userId: PropTypes.string.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};