import React from 'react';
import { Link } from 'react-router-dom';

const CourseJava = () => {
  return (
    <div>
      <div className="about-container">
        <Link to="/" style={{ backgroundColor: 'yellowgreen' }}>
          Go Back
        </Link>
        <h2>Welcome to the Java Course</h2>
        <p>
          Join me on this exciting learning journey. Feel free to explore the
          courses I offer and take the first step towards enhancing your
          programming skills!
        </p>
      </div>
    </div>
  );
};

export default CourseJava;
