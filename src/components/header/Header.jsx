import { useState } from 'react';
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faEarthAsia, faMapLocationDot, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range';
import { format } from "date-fns";

import "./Header.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOptionCounter = (type, value) => {
        setOptions((prev) => {
            return {
                ...prev,
                [type]: options[type] + value,
            }
        })
    }

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } });
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Lưu trú</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Chuyến bay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faEarthAsia} />
                        <span>Chuyến bay + Khách sạn</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Thuê xe</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                        <span>Địa điểm tham quan</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi sân bay</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">Giảm giá trọn đời? Là Genius.</h1>
                        <p className="headerDesc">Nhận tặng thưởng khi đi du lịch – tiết kiệm tức thì từ 10% trở lên với tài khoản Booking.com miễn phí</p>
                        <button className="headerBtn">Đăng Nhập / Đăng Ký</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="Bạn muốn đến đâu?" className="headerSearchInput" onChange={e => setDestination(e.target.value)} />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => {
                                    setOpenDate(!openDate);
                                    setOpenOptions(false);
                                }} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => {
                                    setOpenOptions(!openOptions);
                                    setOpenDate(false);
                                }} className="headerSearchText">{`${options.adult} Người lớn · ${options.children} Trẻ em · ${options.room} Phòng`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Người lớn</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton"
                                                onClick={() => handleOptionCounter("adult", -1)}
                                                disabled={options.adult <= 1}
                                            >-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptionCounter("adult", 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Trẻ em</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton"
                                                onClick={() => handleOptionCounter("children", -1)}
                                                disabled={options.children <= 1}
                                            >-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptionCounter("children", 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Phòng</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton"
                                                onClick={() => handleOptionCounter("room", -1)}
                                                disabled={options.room <= 1}
                                            >-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptionCounter("room", 1)}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Tìm Kiếm</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Header