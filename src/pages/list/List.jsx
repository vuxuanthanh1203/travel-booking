import "./List.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import SearchItem from "../../components/searchItem/SearchItem"


const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOption] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Tìm kiếm</h1>
                        <div className="listItem">
                            <label>Tên chỗ nghỉ / điểm đến:</label>
                            <div className="listItemInput">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <input type="text" value={destination} />
                            </div>
                        </div>
                        <div className="listItem">
                            <label>Ngày nhận phòng</label>
                            <div className="listItemInput">
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            </div>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="listItem">
                            <label>Tùy chọn: </label>
                            <div className="listOptions">
                                <div className="listOptionItem">
                                    <span className="listOptionText">Người lớn</span>
                                    <input type="number" className="listOptionInput" value={options.adult} min={1} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Trẻ em</span>
                                    <input type="number" className="listOptionInput" value={options.children} min={0} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Phòng</span>
                                    <input type="number" className="listOptionInput" value={options.room} min={1} />
                                </div>
                            </div>
                        </div>
                        <button>Tìm kiếm</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List