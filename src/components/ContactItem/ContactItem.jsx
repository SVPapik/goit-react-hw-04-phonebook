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
