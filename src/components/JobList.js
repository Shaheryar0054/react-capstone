import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobsSlice';
import person from '../images/person.jpg';

function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const jobStatus = useSelector((state) => state.jobs.status);

  useEffect(() => {
    if (jobStatus === 'idle') {
      dispatch(fetchJobs()).then(() => {
      });
    }
  }, [jobStatus, dispatch]);

  const frontEndJobsCount = jobs.filter((job) => job.title.toLowerCase().includes('front end')).length;

  const javascriptJobsCount = jobs.filter((job) => job.title.toLowerCase().includes('javascript')).length;

  const fullstackJobsCount = jobs.filter((job) => job.title.toLowerCase().includes('full stack')).length;

  const seniorFullStackJobsCount = jobs.filter((job) => job.title.toLowerCase().includes('senior full stack developer')).length;

  const totalTechJobsCount = jobs.length;

  return (
    <main className="main-container">
      <NavLink to="/all-jobs" className="all-jobs" style={{ textDecoration: 'none' }}>
        <img src={person} alt="All jobs" className="all-job-img" />
        <h3 className="no-of-jobs">
          No of Tech Jobs =
          {totalTechJobsCount}
        </h3>
      </NavLink>
      <div id="available-jobs">
        <h4>Available jobs</h4>
        <div id="job-categories">
          <NavLink to="/front-end-jobs" style={{ textDecoration: 'none' }}>
            <p className="items-1">
              Front End Jobs:
              {frontEndJobsCount}
            </p>
          </NavLink>
          <NavLink to="/javascript-jobs" style={{ textDecoration: 'none' }}>
            <p className="items-2">
              JavaScript Developer Jobs:
              {javascriptJobsCount}
            </p>
          </NavLink>
          <NavLink to="/full-stack-jobs" style={{ textDecoration: 'none' }}>
            <p className="items-3">
              Full Stack Jobs:
              {fullstackJobsCount}
            </p>
          </NavLink>
          <NavLink to="/senior-full-stack-jobs" style={{ textDecoration: 'none' }}>
            <p className="items-4">
              Senior Full Stack Developer Jobs:
              {seniorFullStackJobsCount}
            </p>
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default JobList;
