import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowVucaVulary from './ShowVucaVulary';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header\'/Header';

const LessonPage = () => {
    const { lessonNo } = useParams(); 
    const data = useLoaderData(); 

 
    const lessons = data.filter((lesson) => lesson.lesson_no == lessonNo);

    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto mt-10">
            <h1 className="text-4xl font-bold text-center mb-8">
                Lesson {lessonNo}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {lessons?.length > 0 ? (
                    lessons.map((lesson, idx) => (
                        <ShowVucaVulary key={idx} lesson={lesson} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No vocabulary available for this lesson.
                    </p>
                )}
            </div>
        </div>
        <div className='mb-[80px]'>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default LessonPage;
