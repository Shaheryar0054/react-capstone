import React from 'react';
import { useSelector } from 'react-redux';

function AllJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);

  return (
    <div>
      <h1>All Tech Jobs</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h3>{job.company_name}</h3>
          <p>{job.salary || 'Salary not provided'}</p>
        </div>
      ))}
    </div>
  );
}

export default AllJobs;
