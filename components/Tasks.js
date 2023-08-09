import CourseCard from './CourseCard'

const Tasks = ({ courses }) => {
  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course}  />
      ))}
    </>
  )
}

export default Tasks
