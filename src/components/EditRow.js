import React from 'react';

export default function EditRow({
  handleCancelClick,
  handleEditForm,
  handleEditFormSubmit,
  editFormData,
}) {
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            name="fullName"
            onChange={handleEditForm}
            value={editFormData.fullName}
            required="required"
            placeholder="Enter a name..."
            id=""
          />
        </td>
        <td>
          <input
            type="text"
            name="address"
            onChange={handleEditForm}
            value={editFormData.address}
            required="required"
            placeholder="Enter an address..."
            id=""
          />
        </td>
        <td>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleEditForm}
            value={editFormData.phoneNumber}
            required="required"
            placeholder="Enter a phone number..."
            id=""
          />
        </td>
        <td>
          <input
            type="email"
            name="email"
            onChange={handleEditForm}
            value={editFormData.email}
            required="required"
            placeholder="Enter an email..."
            id=""
          />
        </td>
        <td>
          <button type="button" onClick={handleEditFormSubmit}>Save</button>{' '}
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
}
