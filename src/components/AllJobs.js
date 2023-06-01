import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';

function AllJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);

  return (
    <div className="all-job-container">
      <h3>Location/Salary Range</h3>
      {jobs.map((job) => (
        <div key={job.id} className="jobs-container">
          <h4>{job.company_name}</h4>
          <p>{job.salary || 'Salary not provided'}</p>
          <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} />
        </div>
      ))}
    </div>
  );
}

export default AllJobs;
