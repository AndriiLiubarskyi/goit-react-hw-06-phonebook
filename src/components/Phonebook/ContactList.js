import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from './ContactItem';
import contactsAction from '../../redux/contacts/contacts-action';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(contactsAction.deleteContact(id))

  return (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={()=> onDeleteContact(id)}
      />
    ))}
  </ul>
)};

export default ContactList;
