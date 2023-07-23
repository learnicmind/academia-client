import { FaSearchPlus } from 'react-icons/fa';

const SearchField = () => {
    return (
        <div className="flex items-center justify-center pt-4">
            <input
                type="text"
                placeholder="Search College..."
                className="py-2 pl-10 pr-4 md:w-96  border-2 border-[#14b8a6] rounded-full focus:outline-none focus:border-[#14b8a6] focus:border-2 "
            />
            <span className="absolute ml-72">
                <FaSearchPlus className='text-[#14b8a6] text-xl' />
            </span>
        </div>

    );
};

export default SearchField;