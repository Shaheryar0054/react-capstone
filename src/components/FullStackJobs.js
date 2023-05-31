import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

function FullStackJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const fullstackJobs = jobs.filter((job) => job.title.toLowerCase().includes('full stack'));

  return (
    <div className="fullstack-main">
      <h3>Location/Salary Range</h3>
      {fullstackJobs.map((job) => (
        <div key={job.id} className="fullstack-container">
          <h4>{job.company_name}</h4>
          <p>{job.salary || 'Salary not provided'}</p>
          <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} />
        </div>
      ))}
    </div>
  );
}

export default FullStackJobs;
