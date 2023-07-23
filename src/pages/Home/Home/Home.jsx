import SearchField from "../../../SearchField/SearchField";
import Banner from "../Banner/Banner";
import CollegeCard from "../CollegeCard/CollegeCard";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import CollegeReviews from "./CollegeReviews/CollegeReviews";


const Home = () => {
    return (
        <div>
            <SearchField></SearchField>
            <Banner></Banner>
            <Gallery></Gallery>
            <CollegeCard></CollegeCard>
            <ResearchPaper></ResearchPaper>
            <CollegeReviews></CollegeReviews>
        </div>
    );
};

export default Home;