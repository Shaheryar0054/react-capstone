import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import FrontEndJobs from './components/FrontEndJobs';
import JavaScriptJobs from './components/JavaScriptJobs';
import FullStackJobs from './components/FullStackJobs';
import SeniorFullStackJobs from './components/SeniorFullStackJobs';
import AllJobs from './components/AllJobs';
import Header from './components/Header';
import './styles/style.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/front-end-jobs" element={<FrontEndJobs />} />
        <Route path="/javascript-jobs" element={<JavaScriptJobs />} />
        <Route path="/full-stack-jobs" element={<FullStackJobs />} />
        <Route path="/senior-full-stack-jobs" element={<SeniorFullStackJobs />} />
        <Route path="/all-jobs" element={<AllJobs />} />
      </Routes>
    </>
  );
}

export default App;
