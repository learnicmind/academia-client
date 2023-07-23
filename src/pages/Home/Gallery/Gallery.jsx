import { useState } from 'react';

const Gallery = () => {
  const initialImages = [
    { id: 1, name: 'California Institute of Technology (Caltech)', imageUrl: 'https://i.ibb.co/289y7Fg/clayton-cardinalli-hik-Hz-QKTm-Do-unsplash.jpghttps://i.ibb.co/n7pkkxY/portrait-group-students-celebrating-their-graduation.jpg' },
    { id: 2, name: 'University of Cambridge', imageUrl: 'https://i.ibb.co/wLf2Vrp/graduation-concept-with-students-holding-blank-certificate-template.jpg' },
    { id: 3, name: 'University of Chicago', imageUrl: 'https://i.ibb.co/mv8js5h/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg' },
    { id: 4, name: 'ETH Zurich (Swiss Federal Institute of Technology)', imageUrl: 'https://i.ibb.co/26fFC6j/diversity-students-graduation-success-celebration-concept.jpg' },
    { id: 5, name: 'University of Michigan', imageUrl: 'https://i.ibb.co/F3b3sPL/portrait-group-students-celebrating-their-graduation-1.jpg' },
    { id: 6, name: 'University of Toronto', imageUrl: 'https://i.ibb.co/MPYWTcx/different-nationalities-university-graduates.jpg' },
    { id: 7, name: 'University of Pennsylvania', imageUrl: 'https://i.ibb.co/sCxsSSc/low-angle-graduated-students.jpg' },
    { id: 8, name: 'National University of Singapore (NUS)', imageUrl: 'https://i.ibb.co/2ndCQSt/group-colleagues-with-diploma.jpg' },
    { id: 9, name: 'University of Melbourne', imageUrl: 'https://i.ibb.co/7C3ZSC9/multinational-graduates-male-female-celebrating-graduation-university-campus-removing-their-graduati.jpg' },
  ];

  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? initialImages : initialImages.slice(0, 6);

  return (
    <div className="md:w-11/12 mx-auto my-8">
        <h2 className='text-4xl text-[#32cfbd] ml-2 md:ml-0 font-bold py-4'>Graduate's Gallery</h2>
        <p className='px-2 md:px-0 mb-4 ml-2 md:ml-0 font-semibold text-justify'>Welcome to the "A c a d e m i a" gallery section, where knowledge meets artistry. Immerse yourself in a captivating showcase of academic excellence as we proudly present a curated collection of university graduate students from around the world. In this thoughtfully crafted gallery, each image encapsulates the diverse experiences and accomplishments of these remarkable individuals, adorned with the emblems of their respective institutions.</p>
      <div className="grid px-2 md:px-0 gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {imagesToShow.map((image) => (
          <div key={image.id} className="relative">
            <img src={image.imageUrl} alt={image.name} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">
              <span className="text-lg font-semibold">{image.name}</span>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          className="btn border-0 px-4 py-3 ml-2 md:ml-0 text-lg font-semibold text-[#ccfbf1] bg-[#32cfbd] rounded-lg shadow-lg hover:bg-[#47a59a] mt-2 cursor-pointer"
          onClick={() => setShowAll(true)}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Gallery;
