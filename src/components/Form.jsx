// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactSlice';
import { addContact } from './redux/contactSlice';

export const Form = () => {
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact(name, number ));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          // onChange={handleChange}
          type="text"
          name="name"
          placeholder="Add your name..."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Contact
        <input
          // onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Add your number..."
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
