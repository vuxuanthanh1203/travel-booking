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
                    <button className="bookNow">?????t Ngay</button>
                    <div className="hotelTitle">RedDoorz Plus Nhan Hoa Hotel</div>
                    <div className="hotelType">
                        <FontAwesomeIcon icon={faLeaf} />
                        <span>Ch??? ngh??? Du l???ch B???n v???ng</span>
                    </div>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>66/116 Nhan Hoa, Qu???n Thanh Xu??n, Ha?? N????i, Vi????t Nam</span>
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
                                <p>RedDoorz Plus Nhan Hoa Hotel t???a l???c t???i trung t??m th??? ???? H?? N???i. C??c ph??ng ngh??? t???i ????y s???ch s???, ti???n nghi v?? c?? m??y l???nh. Du kh??ch c??ng c?? th???? truy c???p Wi-Fi mi???n ph?? trong to??n b??? khu??n vi??n.</p>
                                <p>Ch??? ??? gi?? c??? ph???i ch??ng n??y n???m trong b??n k??nh 2,6 km t??? B???o t??ng Kh??ng Qu??n Vi???t Nam, 2,7 km t??? Trung t??m Tri???n l??m Gi???ng V?? v?? 4,1 km t??? V??n Mi???u Qu???c T??? Gi??m. S??n bay Qu???c t??? N???i B??i c??ch ???? 24 km.</p>
                                <p>Nh??n vi??n th??n thi???n t???i qu???y l??? t??n 24 gi??? c?? th??? n??i b???ng c??? ti???ng Anh v?? ti???ng Vi???t. D???ch v??? gi???t l?? v?? ti???n nghi ???i ???????c cung c???p cho t???t c??? c??c kh??ch.</p>
                                <p>M???i ph??ng ?????u ???????c trang b??? ????n gi???n v???i minibar, m??y pha c?? ph??/tr?? v?? truy???n h??nh c??p. Ph??ng t???m ri??ng ??i k??m ti???n nghi v??i sen v?? d??p ??i trong nh?? t???m.</p>
                            </div>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>??i???m n???i b???t c???a ch??? ngh???</h1>
                            <h2>Ho??n h???o cho k??? ngh??? 2 ????m!</h2>
                            <span>
                                <FontAwesomeIcon icon={faLocationDot} className="hotelIcon" />
                                <p>?????a ??i???m h??ng ?????u: ???????c kh??ch g???n ????y ????nh gi?? cao (8,2 ??i???m)</p>
                            </span>
                            <div className="hotelPriceText">
                                <p>VND 846.000</p>
                                <span>(Gi?? cho 2 ????m)</span>
                            </div>
                            <button>?????t ngay</button>
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