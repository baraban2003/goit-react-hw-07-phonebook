import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactSlice';

const getVisibleEl = (contacts = [], filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactList() {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const contactArrey = useSelector(state =>
    getVisibleEl(data, state.contacts.filter)
  );

  return (
    <ul>
      {contactArrey.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteEl={deleteContact}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
