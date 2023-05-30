import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobsSlice';

function JavaScriptJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const jobStatus = useSelector((state) => state.jobs.status);

  useEffect(() => {
    if (jobStatus === 'idle') {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);

  const javascriptJobs = jobs.filter((job) => job.title.toLowerCase().includes('javascript'));

  return (
    <div>
      {javascriptJobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company_name}</p>
          <p>{job.salary || 'Salary not provided'}</p>
        </div>
      ))}
    </div>
  );
}

export default JavaScriptJobs;
