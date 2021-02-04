import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts-selectors';
import contactsActions from '../../redux/contacts-actions';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const contactCheck = () => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return true;
    }
    if (name === '' || number === '') {
      alert('Please fill in all the fields');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contactCheck()) {
      reset();
      return;
    }

    dispatch(contactsActions.addContact(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          className={s.name}
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          placeholder="Enter your mobile number"
          value={number}
          onChange={handleChange}
          className={s.number}
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

/* redux */

/* import { useState } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const contactCheck = () => {
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return true;
    }
    if (name === '' || number === '') {
      alert('Please fill in all the fields');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contactCheck()) {
      reset();
      return;
    }

    onSubmit(name, number);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          className={s.name}
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          placeholder="Enter your mobile number"
          value={number}
          onChange={handleChange}
          className={s.number}
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};



const mapStateToProps = state => ({
   contacts: state.contacts.items
 });

 const mapDispatchToProps = dispatch => ({
 onSubmit: (name, number) => dispatch(contactsActions.addContact(name, number)),
 })

 export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
 */
