import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/old_result">old_Result</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
        <li>
          <Link to="/reference">reference</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default MyNav;
