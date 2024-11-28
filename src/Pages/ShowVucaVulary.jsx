import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowVucaVulary = ({ lesson }) => {
  const { word, pronunciation, meaning, part_of_speech, lesson_no, difficulty, when_to_say, example } = lesson;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    document.title = `Lesson ${lesson_no}`;
  }, [lesson_no]);

  const cardColour = difficulty === "easy" ? "bg-green-400" : "bg-red-500";

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);
  const handleBackToLesson = () => navigate("/learning");

  // Function to pronounce the word
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(pronunciation || word);
    utterance.lang = "es-ES"; 
    speechSynthesis.speak(utterance);
  };



  return (
   <div className="">
    
     <div className="flex justify-center mb-8">
  
      <div className={`${cardColour} card bg-base-100 shadow-xl w-96 h-72`}>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg font-bold">{word}</h2>
        
            <p className="">
              Pronunciation:{" "}
              <span
                className=" underline cursor-pointer font-semibold text-black"
                onClick={handleSpeak}
              >
                {pronunciation || "Speak Up"}
              </span>
            </p>
            <p>Meaning: {meaning}</p>
            <p>Part of Speech: {part_of_speech}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-sm" onClick={handleModalToggle}>
              When To Say
            </button>
            <button className="btn btn-sm" onClick={handleBackToLesson}>
              Back to Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">When to Say</h2>
            <p>
              <strong>Word:</strong> {word}
            </p>
            <p>
              <strong>Meaning:</strong> {meaning}
            </p>
            <p>
              <strong>When to Say:</strong> {when_to_say}
            </p>
            <p>
              <strong>Example:</strong> {example}
            </p>
            <div className="flex justify-end mt-6">
              <button
                className="btn btn-sm bg-teal-500 text-white hover:bg-teal-600 transition"
                onClick={handleModalToggle}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default ShowVucaVulary;
