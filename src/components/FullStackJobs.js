import React from 'react';
import { useSelector } from 'react-redux';

function FullStackJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const fullstackJobs = jobs.filter((job) => job.title.toLowerCase().includes('full stack'));

  return (
    <div>
      <h1>Full Stack Jobs</h1>
      {fullstackJobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h3>{job.company_name}</h3>
          <p>{job.salary || 'Salary not provided'}</p>
        </div>
      ))}
    </div>
  );
}

export default FullStackJobs;
