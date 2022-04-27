import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import data from './mock-data.json';
import Table from './components/Table';
import Form from './components/Form';

let localContacts = JSON.parse(localStorage.getItem('contacts') || data);

function App() {
  const [contacts, setContacts] = useState(localContacts);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const index = contacts.findIndex((contact) => contact.id === contactId);
    const newContacts = [ ...contacts ];

    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    // e.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  return (
    <div className="container">
      {/* <form> */}
      <Table
        contacts={contacts}
        editContactId={editContactId}
        handleEditClick={handleEditClick}
        handleCancelClick={handleCancelClick}
        handleEditForm={handleEditForm}
        editFormData={editFormData}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
      />
      {/* </form> */}
      <Form handleAddForm={handleAddForm} handleSubmitForm={handleSubmitForm} />
    </div>
  );
}

export default App;
