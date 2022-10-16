const ContactItem = ({ nanoid, name, number }) => {
  return (
    <>
      <li key={nanoid}>
        <p>
          {name}:{number}
        </p>
      </li>
    </>
  );
};

export default ContactItem;
