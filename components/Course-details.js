import React from 'react';
import { useParams , Link } from 'react-router-dom';

const CourseDetail = ({ courses }) => {

    const { id } = useParams();
    
    const course = courses.find(course => course.id === parseInt(id, 7));
  
    if (!course) {
      return <div>Course not found</div>;
    }
  
    return (
      <div className="course-detail">
        <h2>{course.title}</h2>
        <p>Student count: {course.count}</p>
        {/* ... other course details ... */}
        <Link to='/' style={{color:'white' ,backgroundColor:'red'}}>
            Go Back
         </Link>
      </div>
    );
  };
  
  export default CourseDetail