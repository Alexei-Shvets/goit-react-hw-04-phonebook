import { BsTrash } from 'react-icons/bs';
import { LiItem, PItem, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <LiItem>
      <PItem>{name}</PItem>
      <PItem>{number}</PItem>
      <Button onClick={() => handleDelete(id)}>
        <BsTrash />
      </Button>
    </LiItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;