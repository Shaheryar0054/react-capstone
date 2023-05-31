import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchJobs } from '../features/jobsSlice';
import person from '../images/person.jpg';
import front from '../images/front.jpg';
import javascript from '../images/javascript.jpg';
import fullstack from '../images/fullstack.jpg';
import senior from '../images/senior.jpg';

function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const jobStatus = useSelector((state) => state.jobs.status);

  useEffect(() => {
    if (jobStatus === 'idle') {
      dispatch(fetchJobs());
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
          No of Tech Jobs
          {' '}
          {totalTechJobsCount}
        </h3>
      </NavLink>
      <div id="available-jobs">
        <h4>Available jobs</h4>
        <div id="job-categories">
          <NavLink to="/front-end-jobs" style={{ textDecoration: 'none' }}>
            <img src={front} alt="All jobs" className="front" />
            <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} className="arrow-icon" />
            <h4 className="items-1">
              Front End Jobs
              {' '}
              {frontEndJobsCount}
            </h4>
          </NavLink>
          <NavLink to="/javascript-jobs" style={{ textDecoration: 'none' }}>
            <img src={javascript} alt="All jobs" className="javascript" />
            <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} className="arrow-icon" />
            <h4 className="items-2">
              JavaScript Developer Jobs
              {' '}
              {javascriptJobsCount}
            </h4>
          </NavLink>
          <NavLink to="/full-stack-jobs" style={{ textDecoration: 'none' }}>
            <img src={fullstack} alt="All jobs" className="fullstack" />
            <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} className="arrow-icon" />
            <h4 className="items-3">
              Full Stack Jobs
              {' '}
              {fullstackJobsCount}
            </h4>
          </NavLink>
          <NavLink to="/senior-full-stack-jobs" style={{ textDecoration: 'none' }}>
            <img src={senior} alt="All jobs" className="senior" />
            <FontAwesomeIcon icon={faCircleRight} style={{ color: 'rgb(255 255 255)' }} className="arrow-icon" />
            <h4 className="items-4">
              Senior Full-Stack Developer Jobs
              {' '}
              {seniorFullStackJobsCount}
            </h4>
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default JobList;
