import PropTypes from 'prop-types';

const SuggestForm = ({ handleNewCourseSubmit, setNewCourses, newCourses }) => {
  // Conditionally render the title input field
  let titleInput = null;
  if (Array.isArray(newCourses)) {
    titleInput = (
      <input
        value={newCourses.title}
        onChange={(e) => setNewCourses({ ...newCourses, title: e.target.value })}
        placeholder="Course Name..."
      />
    );
  }

  return (
    <div className="centered-input-container">
      {titleInput}
      <input
        value={newCourses.count}
        onChange={(e) => setNewCourses({ ...newCourses, count: e.target.value })}
        placeholder="Email..."
      />
      <input
        value={newCourses.phoneNumber}
        onChange={(e) => setNewCourses({ ...newCourses, phoneNumber: e.target.value })}
        placeholder="PhoneNumber..."
      />
      <button onClick={handleNewCourseSubmit}>Add Course</button>
    </div>
  );
};

SuggestForm.propTypes = {
  handleNewCourseSubmit: PropTypes.func.isRequired,
  setNewCourses: PropTypes.func.isRequired,
  newCourses: PropTypes.array.isRequired,
};

export default SuggestForm;
