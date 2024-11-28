import CountUp from 'react-countup';
const SuccessSections = () => {
  
        const stats = [
          { title: 'Users', count: 400, color: 'bg-teal-500' },
          { title: 'Lessons', count: 10, color: 'bg-purple-500' },
          { title: 'Vocabulary Words', count: 200, color: 'bg-blue-500' },
          { title: 'Tutorials', count: 150, color: 'bg-orange-500' },
        ];
    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-teal-600 mb-6">
                    Achievements and Progress
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                    Explore our growing community, lessons, and resources that help you learn effectively!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-lg ${stat.color} text-white flex flex-col items-center`}
                        >
                            <div className="text-5xl font-bold mb-2">
                                <CountUp className='font-semibold italic' end={stat.count} duration={3.5} />
                            </div>
                            <p className="text-lg font-semibold">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessSections;