import "./SuggestionList.css"

const SuggestionList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/16379302.jpg?k=55494e13bb009658f0b7114e816e647c36c26851bf214b6fbc2f05558f9edf86&o=" alt="pListImg" className="sListImg" />
                <div className="sListTitle">
                    <h3>Villa Domina</h3>
                    <p>Split</p>
                    <span className="sPrice">Giá từ VND 2.202.970</span>
                    <div className="sRating">
                        <button>9,5</button>
                        <span>Xuất sắc</span>
                    </div>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="pListImg" className="sListImg" />
                <div className="sListTitle">
                    <h3>Sugar Loft Apartments</h3>
                    <p>Rio de Janeiro</p>
                    <span className="sPrice">Giá từ VND 2.202.970</span>
                    <div className="sRating">
                        <button>9,1</button>
                        <span>Tuyệt hảo</span>
                    </div>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/60345914.jpg?k=847c9404a7398f20d1c41febf7c96ab0f8ad5ad74062faae44a3efa73e709d62&o=" alt="pListImg" className="sListImg" />
                <div className="sListTitle">
                    <h3>Villa Wellness</h3>
                    <p>Budapest</p>
                    <span className="sPrice">Giá từ VND 2.202.970</span>
                    <div className="sRating">
                        <button>9,3</button>
                        <span>Tuyệt hảo</span>
                    </div>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=" alt="pListImg" className="sListImg" />
                <div className="sListTitle">
                    <h3>Appartamento Benincampi</h3>
                    <p>Roma</p>
                    <span className="sPrice">Giá từ VND 2.202.970</span>
                    <div className="sRating">
                        <button>9,7</button>
                        <span>Xuất sắc</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionList