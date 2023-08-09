import photo1 from "/Users/mohanadsafi/Desktop/mscourses/src/components/img22.svg"
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({ course: { id, title, count, img }, onClick }) => {

  return (
    <div className="course-card" key={id}>
      <div className="course-image">
        <img src={photo1} alt={title} />
      </div>
      <div className="course-details">
        <h3>{title}</h3>
        <p>{count} Students</p>
        
      </div>

      {/* Use the Link component to navigate to the course page */}
      
      <Link to={`/course/${id}`} className="view-course-link">
      View Course
    </Link>  
      
    </div>
  );
};


CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired, 
};

export default CourseCard;



