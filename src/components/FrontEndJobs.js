import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchJobs } from '../features/jobsSlice';

function FrontEndJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const jobStatus = useSelector((state) => state.jobs.status);

  useEffect(() => {
    if (jobStatus === 'idle') {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);

  const frontEndJobs = jobs.filter((job) => job.title.toLowerCase().includes('front end'));

  return (
    <div className="front-main-container">
      <h3>Location/Salary Range</h3>
      {frontEndJobs.map((job) => (
        <div key={job.id} className="front-end-container">
          <h4>{job.company_name}</h4>
          <p>{job.salary || 'Salary not provided'}</p>
          <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} />
        </div>
      ))}
    </div>
  );
}

export default FrontEndJobs;
