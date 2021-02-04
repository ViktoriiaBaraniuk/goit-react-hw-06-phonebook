import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import contactsActions from '../../redux/contacts-actions';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <p className={s.itemName}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(id))}
            className={s.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

/* import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <p className={s.itemName}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: {items, filter} }) => ({
     contacts: getVisibleContacts(items, filter),
 });
 const mapDispatchToProps = dispatch => ({
 onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
 })

 export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
*/
