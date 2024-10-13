import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to EduCode</h1>
          <p className="text-xl mb-8">
            Learn coding with interactive tutorials, quizzes, and real-time code practice.
          </p>
          <Link
            to="/sign-up"
            className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Why EduCode?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <i className="fas fa-code text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Interactive IDE</h3>
            <p className="text-gray-600">
              Practice coding in real-time with support for multiple programming languages.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <i className="fas fa-book text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Courses & Tutorials</h3>
            <p className="text-gray-600">
              Learn with our step-by-step tutorials and solve coding challenges.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <i className="fas fa-puzzle-piece text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Quizzes & Games</h3>
            <p className="text-gray-600">
              Improve your coding skills with interactive quizzes and fun coding games.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Beginner's Guide to Python</h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of Python and start building projects in no time.
              </p>
              <Link
                to="/courses/python"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>

            {/* Course 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Mastering C</h3>
              <p className="text-gray-600 mb-4">
                Deep dive into C with advanced projects and problem-solving challenges.
              </p>
              <Link
                to="/courses/c"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">C++ Unlocked</h3>
              <p className="text-gray-600 mb-4">
              Delve into C++ to harness its powerful features for creating fast, efficient software.              </p>
              <Link
                to="/courses/cpp"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>

            {/* Course 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Develop skills with Java</h3>
              <p className="text-gray-600 mb-4">
              Learn Java from the ground up, focusing on practical applications and real-world projects.              </p>
              <Link
                to="/courses/java"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <p className="text-gray-600 mb-4">
                "EduCode helped me transition from a complete beginner to a confident coder!"
              </p>
              <h4 className="font-semibold text-xl">- John Doe</h4>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <p className="text-gray-600 mb-4">
                "The tutorials and quizzes made learning to code fun and engaging."
              </p>
              <h4 className="font-semibold text-xl">- Jane Smith</h4>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <p className="text-gray-600 mb-4">
                "EduCode's real-time IDE is perfect for practicing coding while learning!"
              </p>
              <h4 className="font-semibold text-xl">- Alex Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Start Your Coding Journey Today!</h2>
          <p className="text-xl mb-8">Join thousands of learners and improve your coding skills with EduCode.</p>
          <Link
            to="/sign-up"
            className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>&copy; 2024 EduCode. Empowering the next generation of coders.</p>
      </footer>
    </div>
  );
}
