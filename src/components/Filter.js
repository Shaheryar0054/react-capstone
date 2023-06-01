import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';

const Filter = ({ searchTerm, setSearchTerm, filteredJobs }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for job titles..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showDropdown && searchTerm && (
        <div className="dropdown">
          {filteredJobs.map((job) => (
            <div key={job.id} className="dropdown-item">
              <h5>{job.title}</h5>
              <p>{job.salary || 'Salary not provided'}</p>
              <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filteredJobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Filter;
