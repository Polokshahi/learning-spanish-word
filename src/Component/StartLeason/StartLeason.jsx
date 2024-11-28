import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StartLeason = () => {
   

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Your Lesson is Starting</h1>
      <p className="py-6">
      "Embark on your journey to fluency and discover the beauty of the Spanish language – start learning today!"
      </p>
      <Link to={'/learning'} className="btn btn-primary">Go To Your Lesson</Link>
    </div>
  </div>
</div>
    );
};

export default StartLeason;
