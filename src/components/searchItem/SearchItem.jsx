import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./SearchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/225514284.webp?k=e4f9978ecebede03f2003513178d33761e8480d3fbd5ee60079ea2f5de0ffaa1&o=&s=1"
                alt="itemImg"
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">RedDoorz Plus Nhan Hoa Hotel</h1>
                <span className="siDistance">Cách trung tâm 5,4km</span>
                <span className="siPreferential">Ưu Đãi Trong Thời Gian Có Hạn</span>
                <span className="siSubtitle"><FontAwesomeIcon icon={faLeaf} />  Chỗ nghỉ Du lịch Bền vững</span>
                <span className="siFeatures">Phòng Superior Giường Đôi</span>
                <span className="siCancelOp">Miễn phí hủy</span>
                <span className="siCancelOpSubtitle">Bạn có thể hủy sau, nên hãy đặt ngay hôm nay để có giá tốt.</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <button>8.9</button>
                    <span>Tốt</span>
                </div>
                <div className="siDetailsText">
                    <span className="siPrice">VND 846.000</span>
                    <span className="siTaxOp">Đã bao gồm thuế và phí</span>
                    <button className="siCheckButton" >Xem chỗ trống</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem