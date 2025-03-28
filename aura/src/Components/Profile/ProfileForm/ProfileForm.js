import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    location: '',
    alternateMobile: ''
  });

  const [errors, setErrors] = useState({});

  // Validation Functions
  const validateField = (name, value) => {
    let errorMsg = '';

    if (value.trim() === '') {
      errorMsg = `${name} is required`;
    } else {
      switch (name) {
        case 'fullName':
          if (!/^[A-Za-z\s]+$/.test(value)) {
            errorMsg = 'Full Name must contain only letters';
          }
          break;
        case 'mobile':
        case 'alternateMobile':
          if (!/^\d{10}$/.test(value)) {
            errorMsg = 'Enter a valid 10-digit mobile number';
          }
          break;
        case 'email':
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            errorMsg = 'Enter a valid email address';
          }
          break;
        case 'dob':
          const today = new Date().toISOString().split('T')[0];
          if (value > today) {
            errorMsg = 'Date of Birth cannot be in the future';
          }
          break;
        default:
          break;
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Blur Event (Triggers Validation)
  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  // Check if Form is Valid
  const isFormValid = Object.values(formData).every((val) => val.trim() !== '') &&
                      Object.values(errors).every((err) => err === '');

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Profile Details</h2>
        <form>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Name"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter your Mobile"
            value={formData.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}

          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}

          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter your City"
            value={formData.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.location && <span className="error">{errors.location}</span>}

          <label>Alternate Mobile</label>
          <input
            type="text"
            name="alternateMobile"
            placeholder="Enter alternate number"
            value={formData.alternateMobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.alternateMobile && <span className="error">{errors.alternateMobile}</span>}

          <button type="submit" className="edit-btn" disabled={!isFormValid}>
            EDIT <i className="fa fa-edit"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
