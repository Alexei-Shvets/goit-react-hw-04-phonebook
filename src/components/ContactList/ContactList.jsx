import ContactItem from '../ContactItem/ContactItem';
import { UlList } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDelete }) => {
    const elements = contacts.map(({ id, name, number }) => (
        <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
        />
    ));
    return <UlList>{elements}</UlList>;
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    }).isRequired
).isRequired,
};

export default ContactList;