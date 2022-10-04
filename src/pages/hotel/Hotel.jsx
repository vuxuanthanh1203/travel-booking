import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLeaf, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./Hotel.css"
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {

    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277129414.jpg?k=bb18bbdfb03d759a3eac7c5e94d2c7844677ee24c10e5c05ad4503e9995a67ad&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277129405.jpg?k=104d9a8e3abc95db392d046bc1a0d6350d24c5ce65697d7e675faea314843124&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277129326.jpg?k=e69980971343188fbca91052503096f7fd2720af42f3182d73da1b16445f7ff6&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277129483.jpg?k=a148a940f55ef76586ff6facf6073f74f5ae027f0740ff6e63f63def20a05f2e&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277129469.jpg?k=19040439442a3466bce01e842e3586411f6138ec8d074087c76f978502e6a486&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277129325.jpg?k=cf02af4c91a4e2beae2c57e5d82cc2dd1373003503863bee39d2e275cb3afbf1&o=&hp=1"
        }
    ]

    const handleOpen = (index) => {
        setSliderNumber(index);
        setOpen(true);
    };

    const handleMove = (arrow) => {
        let newSliderNumber;
        if (arrow === "left") {
            newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
        } else {
            newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
        }

        setSliderNumber(newSliderNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <div className="sliderWrapper">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("left")} />
                        <img src={photos[sliderNumber].src} alt="silderImg" className="silderImg" />
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("right")} />
                    </div>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Đặt Ngay</button>
                    <div className="hotelTitle">RedDoorz Plus Nhan Hoa Hotel</div>
                    <div className="hotelType">
                        <FontAwesomeIcon icon={faLeaf} />
                        <span>Chỗ nghỉ Du lịch Bền vững</span>
                    </div>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>66/116 Nhan Hoa, Quận Thanh Xuân, Hà Nội, Việt Nam</span>
                    </div>
                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper" key={index}>
                                <img onClick={() => handleOpen(index)} src={photo.src} alt="hotelImg" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            {/* <h1 className="hotelTitle"></h1> */}
                            <div className="hotelDesc">
                                <p>RedDoorz Plus Nhan Hoa Hotel tọa lạc tại trung tâm thủ đô Hà Nội. Các phòng nghỉ tại đây sạch sẽ, tiện nghi và có máy lạnh. Du khách cũng có thể truy cập Wi-Fi miễn phí trong toàn bộ khuôn viên.</p>
                                <p>Chỗ ở giá cả phải chăng này nằm trong bán kính 2,6 km từ Bảo tàng Không Quân Việt Nam, 2,7 km từ Trung tâm Triển lãm Giảng Võ và 4,1 km từ Văn Miếu Quốc Tử Giám. Sân bay Quốc tế Nội Bài cách đó 24 km.</p>
                                <p>Nhân viên thân thiện tại quầy lễ tân 24 giờ có thể nói bằng cả tiếng Anh và tiếng Việt. Dịch vụ giặt là và tiện nghi ủi được cung cấp cho tất cả các khách.</p>
                                <p>Mỗi phòng đều được trang bị đơn giản với minibar, máy pha cà phê/trà và truyền hình cáp. Phòng tắm riêng đi kèm tiện nghi vòi sen và dép đi trong nhà tắm.</p>
                            </div>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Điểm nổi bật của chỗ nghỉ</h1>
                            <h2>Hoàn hảo cho kỳ nghỉ 2 đêm!</h2>
                            <span>
                                <FontAwesomeIcon icon={faLocationDot} className="hotelIcon" />
                                <p>Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,2 điểm)</p>
                            </span>
                            <div className="hotelPriceText">
                                <p>VND 846.000</p>
                                <span>(Giá cho 2 đêm)</span>
                            </div>
                            <button>Đặt ngay</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel