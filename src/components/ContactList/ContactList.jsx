import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} nanoid={id} />;
      })}
    </ul>
  );
};

export default ContactList;
