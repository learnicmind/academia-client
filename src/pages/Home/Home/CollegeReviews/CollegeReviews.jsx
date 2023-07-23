import React from 'react';

const CollegeReviews = () => {

    const reviews = [
        {
            id: 1,
            collegeName: "University of Michigan",
            reviewerName: "Devid Din",
            reviewerImage: "https://i.ibb.co/c1kLXKd/Untitled-design-24-e1678464968735.png",
            reviewText:
                "I had a wonderful experience studying at University of Michigan. The professors were knowledgeable, and the campus facilities were excellent.",
            Ratings: "5"
        },
        {
            id: 2,
            collegeName: "University of Toronto",
            reviewerName: "Batista Rid",
            reviewerImage: `
          https://i.ibb.co/GCWJy0h/pexels-padmathilaka-wanigasekara-7616706-1024x683.jpg`,
            reviewText:
                "University of Toronto provided a supportive learning environment. The practical labs and research opportunities were top-notch.",
                Ratings: "5"
        },
        {
            id: 3,
            collegeName: "University of Chicago",
            reviewerName: "Gabrial Barbosa",
            reviewerImage: `https://i.ibb.co/PNVSb02/istockphoto-1278978168-612x612.jpg`,
            reviewText:
                "University of Chicago provided a supportive learning environment. The practical labs and research opportunities were top-notch.",
                Ratings: "5"
        },
    ];

    return (
        <div className="md:w-11/12 mx-auto my-8 p-4 rounded shadow-md">
            <h2 className='md:text-4xl text-[#32cfbd] font-bold py-4'>College Reviews</h2>
            <p className="text-gray-600 mb-4 font-semibold">
                Read what students and alumni have to say about their experiences at specific colleges:
            </p>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="border p-4 rounded-lg flex items-center space-x-4">
                        <img
                            src={review.reviewerImage}
                            alt={review.reviewerName}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-bold">{review.collegeName}</h3>
                            <p className="text-gray-600 font-bold">By {review.reviewerName}</p>
                            <p className="text-gray-800 mt-2 font-semibold">{review.reviewText}</p>
                            <p className='font-bold text-gray-800'>Ratings: {review.Ratings}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CollegeReviews;