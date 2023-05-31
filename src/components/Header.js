import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div id="header-container">
      <div>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#ffffff' }} onClick={() => navigate(-1)} />
      </div>
      <h4 className="mb-0 text-white">Tech Jobs</h4>
      <div>
        <FontAwesomeIcon icon={faMicrophone} className="header-icon" />
        <FontAwesomeIcon icon={faCog} className="header-icon-2" />
      </div>
    </div>
  );
}

export default Header;
