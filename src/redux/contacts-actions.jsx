import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;

/* redux

import shortid from 'shortid';
import types from './contacts-types';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
    }
});

const deleteContact = contactId => ({
     type: types.DELETE,
     payload: contactId,
});

const changeFilter = value => ({
     type: types.CHANGE_FILTER,
     payload: value,
})

const contsctsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
 */
