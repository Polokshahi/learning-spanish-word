import React, { useEffect, useState } from 'react';

const OwnCreateSections1 = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        
        return () => clearInterval(timer);
    }, []);


    const formatTime = (time) => {
        return time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    return (
       <div>
       
         <div className="flex flex-col items-center justify-center  bg-gray-100">

         <h1 className='font-bold text-xl pb-4 text-center md:text-3xl md:font-bold md:pb-4'>Time Managment for Learning Spanish Vucavulary</h1>
            
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
                <h2 className="text-3xl font-semibold text-teal-600 mb-4">
                    RealTime Clock
                </h2>
                <div className="text-5xl font-bold text-gray-800">
                    {formatTime(currentTime)}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Stay in sync with realtime updates.
                </p>
            </div>
        </div>
       </div>
    );
};

export default OwnCreateSections1;