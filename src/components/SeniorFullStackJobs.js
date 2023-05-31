import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

function SeniorFullStackJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const seniorFullStackJobs = jobs.filter((job) => job.title.toLowerCase().includes('senior full stack developer'));

  return (
    <div className="senior-main">
      <h3>Location/Salary Range</h3>
      {seniorFullStackJobs.map((job) => (
        <div key={job.id} className="senior-container">
          <h4>{job.company_name}</h4>
          <p>{job.salary || 'Salary not provided'}</p>
          <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} />
        </div>
      ))}
    </div>
  );
}

export default SeniorFullStackJobs;
