import React from 'react';

const Card = ({words}) => {

    const {word, when_to_say, pronunciation, part_of_speech, meaning } = words;
    console.log(words)
    return (
       <div className='p-4'>
         <div className="card bg-base-100 border-2 shadow-xl">
        <div className="card-body hover:bg-sky-500 hover:text-white, transition duration-700 ease-in-out  rounded-xl ">
          <h2 className="text-3xl font-semibold underline text-center">{word}</h2>
          <p><span className='font-semibold'>Meaning:</span> {meaning}</p>
          <p className=''><span className='font-semibold'>Sentence:</span> {when_to_say}</p>
          <p className=''><span className='font-semibold'>Pronunciation:</span> {pronunciation}</p>
          <p className=''><span className='font-semibold'>Part_of_Speech:</span> {part_of_speech}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
       </div>
    );
};

export default Card;