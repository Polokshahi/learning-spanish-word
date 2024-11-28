import React from 'react';

const About_Section = () => {
    return (
        <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-600 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            At <span className="font-semibold text-teal-500">Language Leap</span>, 
            our mission is to make language learning accessible, engaging, and fun for everyone. 
            We empower users to build strong vocabulary skills through interactive tools, 
            personalized resources, and a supportive community.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Learn with Interactive Flashcards
              </h3>
              <p className="text-gray-600 mb-4">
                Use our visually engaging flashcards to memorize new words quickly. 
                Each card comes with definitions, examples, and pronunciation guides.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600">
                Explore Flashcards
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Play Vocabulary Games
              </h3>
              <p className="text-gray-600 mb-4">
                Make learning fun with our games like word matching, spelling bees, and timed quizzes.
                Challenge yourself and track your progress.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600">
                Play Games
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Personalized Vocabulary Lists
              </h3>
              <p className="text-gray-600 mb-4">
                Save words to your personalized vocabulary list and review them whenever you want. 
                Tailor your learning experience to your needs.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600">
                Build My List
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Join a Global Community
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with learners worldwide, share your progress, and gain motivation from others on their language-learning journey.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About_Section;