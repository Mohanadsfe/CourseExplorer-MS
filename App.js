import React, { useState, useEffect } from "react";
import { HiAcademicCap } from "react-icons/hi";
import CourseCard from './components/CourseCard';
import SearchIcon from "./components/search2.svg"; // Make sure to have the correct path to the SVG
import SuggestForm from "./components/Suggest";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import CourseJava from './components/Java'
import CourseDetail from './components/Course-details'

const App = () => {
  const [searchCourse, setSearchCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      setCourses(data);
    }

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchCourse.toLowerCase())
  );

  const handleSearchIconClick = () => {
    if (filteredCourses.length === 0) {
      alert("No courses found!");
    }
  };


  const handleSearchIconClickHeadeButton = () => {
    // Change the route when the button is clicked
    setCurrentRoute('/java');
  };

  const handleNewCourseSubmit = async () => {
    // Prepare the new course data
    const newCourseData = { ...newCourses };
  
    // Send a POST request to add the new course
    const response = await fetch('http://localhost:5001/coursesClient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourseData),
    });
  
    // Assuming the server responds with the updated list of courses
    const updatedCourses = await response.json();

    try{
    if (Array.isArray(updatedCourses)) {
      setCourses(updatedCourses);
    } else {
      console.error("Fetched data is not an array:", updatedCourses);
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
  

    // Clear the newCourses state or reset form fields
    setNewCourses({ title: "", count: "" });
  };
  
  

  return (
    <Router>
    <div className="app">
      <h1>
        Welcome To Mohanad's Website!
        <HiAcademicCap color="green" />
      </h1>
 <Routes>
          <Route
           path='/'
           element={
             <>
      <div className="search">
        <input
          value={searchCourse}
          onChange={(e) => setSearchCourse(e.target.value)}
          placeholder="Search for courses"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSearchIconClick}
        />
      </div>

      <div className="container">
        {filteredCourses.length === 0 ? (
          <SuggestForm
          handleNewCourseSubmit={handleNewCourseSubmit}
          setNewCourses={setNewCourses}
          newCourses={newCourses}
        />
        ) : (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} 
            onClick={() => setCurrentRoute('/')}/>
            
          ))
        )}

      </div>

      </>
          }
          />
          <Route
            path="/course/:id"
            element={<CourseDetail courses={courses} />}
          />
          
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
