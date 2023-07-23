import React from 'react';

const ResearchPaper = () => {

    const papers = [
        {
            id: 1,
            title: "Research Paper 1",
            author: "Alexis Stiphen",
            link: "https://example.com/research_paper_1",
        },
        {
            id: 2,
            title: "Research Paper 2",
            author: "Robert Brown",
            link: "https://example.com/research_paper_2",
        },
        {
            id: 3,
            title: "Research Paper 3",
            author: "Gabrial Hesus",
            link: "https://example.com/research_paper_2",
        },

    ];

    return (
        <div  className="md:w-11/12 mx-auto my-8">
            <div className=" p-4 rounded shadow-md">
                <h2 className='md:text-4xl text-[#32cfbd] font-bold py-4'>Research Papers</h2>
                <p className="text-gray-600 mb-4  font-bold">
                    Welcome to our collection of recommended research papers. Our college students have conducted extensive research on various topics. Feel free to explore these papers to expand your knowledge!
                </p>
                <ul>
                    {papers.map((paper) => (
                        <li key={paper.id} className="mb-2">
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {paper.title}
                            </a>
                            <p className="text-gray-600 text-sm font-bold">By {paper.author}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResearchPaper;