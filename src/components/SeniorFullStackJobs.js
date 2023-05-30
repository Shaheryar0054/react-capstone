import React from 'react';
import { useSelector } from 'react-redux';

function SeniorFullStackJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const seniorFullStackJobs = jobs.filter((job) => job.title.toLowerCase().includes('senior full stack developer'));

  return (
    <div>
      <h1>Senior Full Stack Developer Jobs</h1>
      {seniorFullStackJobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h3>{job.company_name}</h3>
          <p>{job.salary || 'Salary not provided'}</p>
        </div>
      ))}
    </div>
  );
}

export default SeniorFullStackJobs;
