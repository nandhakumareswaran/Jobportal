import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserApplyService from '../service/Userapply.service';
import '../styles/details.css';

const ApplyPage = () => {
  const location = useLocation();
  const { title } = location.state || {};
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    experience: '',
    education: '',
    skills: '',
    email: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});
  const [educationSuggestions, setEducationSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')) || {};
    if (loggedInUser && loggedInUser.registerId) {
      setFormData((prevData) => ({
        ...prevData,
        registerId: loggedInUser.registerId,
      }));
    }
  }, []);

  const educationDomains = ['BSc', 'BCom', 'BA', 'BTech', 'MBA', 'MCA', 'BPharm'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'education') {
      const filteredDomains = educationDomains.filter(domain =>
        domain.toLowerCase().includes(value.toLowerCase())
      );
      setEducationSuggestions(filteredDomains);
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.state.trim()) newErrors.state = 'State is required.';
    if (!formData.pinCode.match(/^\d{6}$/)) newErrors.pinCode = 'Pin code must be 6 digits.';
    if (!formData.country.trim()) newErrors.country = 'Country is required.';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required.';
    if (!formData.education.trim()) newErrors.education = 'Education is required.';
    if (!formData.skills.trim()) newErrors.skills = 'Skills are required.';
    if (!formData.email.match(/^[^@]+@[^@]+\.[^@]+$/)) newErrors.email = 'Invalid email address.';
    if (!formData.phoneNumber.match(/^\d{10}$/)) newErrors.phoneNumber = 'Phone number must be 10 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      UserApplyService.create(formData)
        .then((response) => {
          alert('Application submitted successfully!');
          navigate('/userapplyjobs');
        })
        .catch((error) => {
          console.error('Error submitting application:', error.response ? error.response.data : error.message);
        });
    }
  };

  return (
    <div className="apply-page">
      <h2>Apply for {title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div className="error-message">{errors.gender}</div>}
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
          {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <div className="error-message">{errors.address}</div>}
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          {errors.city && <div className="error-message">{errors.city}</div>}
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          {errors.state && <div className="error-message">{errors.state}</div>}
        </div>
        <div>
          <label>Pin Code:</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
          />
          {errors.pinCode && <div className="error-message">{errors.pinCode}</div>}
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
          {errors.country && <div className="error-message">{errors.country}</div>}
        </div>
        <div>
          <label>Experience:</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
          {errors.experience && <div className="error-message">{errors.experience}</div>}
        </div>
        <div>
          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
          />
          {errors.education && <div className="error-message">{errors.education}</div>}
        </div>
        <div>
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
          {errors.skills && <div className="error-message">{errors.skills}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyPage;
