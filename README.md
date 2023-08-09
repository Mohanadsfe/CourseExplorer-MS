# CourseExplorer-MS
CourseHub is an educational platform designed to simplify and enhance the learning experience for students and enthusiasts.
# Mohanad's Programming Courses Website

Welcome to my programming courses website! This is a web application that provides a platform for learners to explore and enroll in various programming courses. Whether you're a beginner looking to start your coding journey or an experienced developer seeking to enhance your skills, you'll find a variety of courses tailored to your needs.

<img width="1238" alt="Screenshot 2023-08-09 at 17 08 59" src="https://github.com/Mohanadsfe/CourseExplorer-MS/assets/92846018/8a270162-4d89-413b-8611-580ab983ea98">

<img width="1346" alt="Screenshot 2023-08-09 at 17 09 11" src="https://github.com/Mohanadsfe/CourseExplorer-MS/assets/92846018/8fc4383b-b6fe-44f7-bb1c-ad4733a8bb1f">


<img width="1104" alt="Screenshot 2023-08-09 at 17 09 25" src="https://github.com/Mohanadsfe/CourseExplorer-MS/assets/92846018/8a9aa4b5-c9ae-4e6c-ba0d-39e1210cde3d">

<img width="992" alt="Screenshot 2023-08-09 at 17 09 37" src="https://github.com/Mohanadsfe/CourseExplorer-MS/assets/92846018/cbdc1f87-1147-44fb-bbd4-5690d4d20980">


## Features

- **Search Courses:** Use the search bar to find courses based on keywords.
- **Enroll in Courses:** Explore the list of courses and enroll in those that interest you.
- **Submit Course Suggestions:** Have a course idea? Submit your suggestions using the provided form.
- **Course Details:** Click on a course card to view detailed information about the course.
- **About Me:** Learn more about me, Mohanad Safi, and my passion for teaching programming.

## Getting Started

1. Clone this repository: `git clone https://github.com/yourusername/mohans-courses.git`
2. Navigate to the project directory: `cd moans-courses`
3. Install dependencies: `npm install`
4. Start the development server: `npm start

## Technologies Used

- React.js for building the frontend user interface.
- React Router for handling navigation and routing.
- Fetch API for fetching data from the server.
- CSS for styling and responsive design.
- Google Fonts for typography.

## Key Components

### `App`

The main component acts as the entry point of the application. It includes:
- State management for the search functionality and course data.
- Fetching course data from the server.
- Rendering course cards and the search bar.
- Handling the route setup using React Router.
- Integration with other components such as `CourseCard`, `CourseDetail`, `About`, and `Footer`.

### `CourseCard`

This component represents an individual course card displayed on the homepage. It includes:
- Props for passing course data.
- Rendering course title, student count, and a link to view course details.
- Handling the click event to navigate to the course detail page.

### `CourseDetail`

The component is responsible for displaying detailed information about a specific course. It includes:
- Receiving course data as props.
- Extracting course information using React Router's `useParams`.
- Rendering course title, student count, and additional course details.
- Providing a "Go Back" link to return to the homepage.

## Contributing

Contributions are welcome! If you find any bugs, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the GBL.

## Contact

Feel free to reach out to me at [mohanadsfe@gmail.com] for any questions or inquiries.

