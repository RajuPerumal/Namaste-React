import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    age: '',
    sex: 'Male',
    address: '',
    disability: 'LD',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-form">
      <h2>User Information Form</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} readOnly />

        <label>Sex:</label>
        <div>
          <input
            type="radio"
            name="sex"
            value="Male"
            checked={formData.sex === 'Male'}
            onChange={handleInputChange}
          />
          Male
          <input
            type="radio"
            name="sex"
            value="Female"
            checked={formData.sex === 'Female'}
            onChange={handleInputChange}
          />
          Female
          <input
            type="radio"
            name="sex"
            value="Others"
            checked={formData.sex === 'Others'}
            onChange={handleInputChange}
          />
          Others
        </div>

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleInputChange} />

        <label>Disability Type:</label>
        <select name="disability" value={formData.disability} onChange={handleInputChange}>
          <option value="LD">LD</option>
          <option value="HI">HI</option>
          <option value="VI">VI</option>
          <option value="MuD">MuD</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
