import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold mb-4">About EduCode</h1>
          <p className="text-xl mb-8">
            Empowering beginners to master coding with interactive courses, built-in IDE, and hands-on practice.
          </p>
          <Link to="/courses" className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200">
            Explore Our Courses
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 px-5">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1: Built-in IDE */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="src/images/ide.png" alt="IDE" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Built-in IDE</h3>
            <p>
              Practice coding directly in your browser with our powerful and intuitive IDE, supporting C/C++, Java, and Python.
            </p>
          </div>

          {/* Feature 2: Courses and Tutorials */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="src/images/courses.png" alt="Courses" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Courses and Tutorials</h3>
            <p>
              Learn from our curated coding courses, tutorials, and coding challenges designed for all skill levels.
            </p>
          </div>

          {/* Feature 3: Quizzes and Games */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="src/images/quiz.png" alt="Quizzes" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quizzes and Games</h3>
            <p>
              Test your knowledge with interactive quizzes and coding games that make learning fun and engaging.
            </p>
          </div>

          {/* Feature 4: Coding Problems Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="src/images/problems.png" alt="Coding Problems" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coding Problem Support</h3>
            <p>
              Get assistance with complex coding problems and explore solutions provided by the community and experts.
            </p>
          </div>

          {/* Feature 5: Quick Notes */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="src/images/notes.png" alt="Quick Notes" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Notes</h3>
            <p>
              Take notes directly in our platform as you progress through lessons and coding exercises.
            </p>
          </div>

          {/* Feature 6: Community Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="src/images/community.png" alt="Community Support" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>
              Connect with other learners and professionals in our Stack Overflow-like community to get answers and share ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="src/images/team1.png" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & Lead Instructor</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="src/images/team2.png" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Curriculum Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="src/images/team3.png" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2024 EduCode. Empowering the next generation of coders.</p>
      </footer>
    </div>
  );
}
