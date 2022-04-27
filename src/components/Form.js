const Form = ({handleAddForm, handleSubmitForm}) => {
    return (
    <div>
      <h2>Add a contact</h2>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddForm}
          id=""
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddForm}
          id=""
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddForm}
          id=""
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddForm}
          id=""
        />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default Form;
