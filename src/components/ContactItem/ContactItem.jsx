import PropTypes from 'prop-types';

const ContactItem = ({ nanoid, name, number, deleteContact }) => {
  return (
    <>
      <li key={nanoid}>
        <p>
          {name}: {number}
        </p>
      </li>
      <button type="button" onClick={() => deleteContact(nanoid)}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  nanoid: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
