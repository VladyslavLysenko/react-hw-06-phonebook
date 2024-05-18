import { ContactsItem } from './ContactsItem';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const state = useSelector(state => state);
  console.log('state:', state);
  const contacts = state.contacts;
  console.log('state contacts', contacts);

  return (
    <section title="Contacts">
      <h2>Contacts</h2>
      <ul className="contacts__list">
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactsItem contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  );
};
