import React from 'react';

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-md">
        <div className="text-red-500 text-6xl mb-4">
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <h1 className="text-5xl font-extrabold text-purple-700">Opps 404 !</h1>
        <p className="text-gray-600 font-semibold mt-2">
          We encountered an unexpected error. Please try again later.
        </p>
      </div>
    </div>
    );
};

export default Error;