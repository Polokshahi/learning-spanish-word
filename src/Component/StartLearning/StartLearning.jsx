import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';

import ShowVucaVulary from '../../Pages/ShowVucaVulary';
import Footer from '../Footer/Footer';
import Header from '../Header\'/Header';

const StartLearning = () => {
    const { user } = useContext(AuthContext);
    const leason = Array.from({ length: 10 });
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {

        document.title = 'Start Learning';
    
      },[])

    return (
        <div>
            <Header></Header>

            <div className='max-w-5xl mx-auto mt-10'>
                <h1 className=" text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center py-3 underline ">
                    Start Learning <span className='text-sky-500 no-underline'>{user?.displayName ? user.displayName : ''}</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0'>
                    {leason.map((item, index) => (
                        <NavLink to={`/lesson/${index + 1}`} key={index} className="flex justify-center items-center h-16 bg-gray-200 rounded-md shadow-md p-4 mb-4 hover:bg-sky-700">
                            <h1 className="hover:text-white text-2xl font-semibold text-black">{`Lesson ${index + 1}`}</h1>
                        </NavLink>
                    ))}
                </div>

                <section className="">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-6">Learn the Alphabet</h2>
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl aspect-video">
                                <iframe
                                    className="w-full h-full rounded shadow-md"
                                    src="https://www.youtube.com/embed/hsLYD1Jyf3A?si=a-Ov2LhSNiSKuM00"
                                    title="Learn the Alphabet"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-6 flex justify-center">
                    {user ? (
                        <Link to={'/tutorials'} className="bg-blue-500 text-white px-4 py-2 rounded shadow">
                            View more
                        </Link>
                    ) : (
                        <span className="text-gray-500 text-lg">Please log in to view more tutorials</span>
                    )}
                </div>
            </div>

            <div className='mt-10 mb-[80px] lg:mb-0'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default StartLearning;
