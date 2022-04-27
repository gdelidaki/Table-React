import ReadOnlyRow from './ReadOnlyRow';
import EditRow from './EditRow';
import { Fragment } from 'react';

export default function Table({
  contacts,
  editContactId,
  handleEditClick,
  handleCancelClick,
  handleEditForm,
  editFormData,
  handleEditFormSubmit,
  handleDeleteClick
}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id ? (
                <EditRow handleEditFormSubmit={handleEditFormSubmit} editFormData={editFormData} handleCancelClick={handleCancelClick} handleEditForm={handleEditForm} />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}
