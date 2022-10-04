import "./PropertyList.css"

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="pListImg" className="pListImg" />
                <div className="pListTitle">
                    <h1>Khách sạn</h1>
                    <p>864,788 khách sạn</p>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="pListImg" className="pListImg" />
                <div className="pListTitle">
                    <h1>Căn hộ</h1>
                    <p>846,628 căn hộ</p>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="pListImg" className="pListImg" />
                <div className="pListTitle">
                    <h1>Resort</h1>
                    <p>17,992 resort</p>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="pListImg" className="pListImg" />
                <div className="pListTitle">
                    <h1>Biệt thự</h1>
                    <p>447,377 biệt thự</p>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="pListImg" className="pListImg" />
                <div className="pListTitle">
                    <h1>Nhà gỗ</h1>
                    <p>34,429 nhà gỗ</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyList