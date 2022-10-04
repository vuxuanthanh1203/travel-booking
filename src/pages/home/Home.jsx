import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import LocationList from "../../components/locationList/LocationList";
import "./Home.css";
import SuggestionList from "../../components/suggestionList/SuggestionList";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <div className="homeTitle">
                    <h1 className="homeTitleText">Khám phá Việt Nam</h1>
                    <p className="homeTitleDesc">Các điểm đến phổ biến này có nhiều điều chờ đón bạn</p>
                </div>
                <LocationList />
                <div className="homeTitle">
                    <h1 className="homeTitleText">Tìm theo loại chỗ nghỉ</h1>
                </div>
                <PropertyList />
                <Featured />
                <div className="homeTitle">
                    <h1 className="homeTitleText">Nhà ở mà khách yêu thích</h1>
                </div>
                <SuggestionList />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home