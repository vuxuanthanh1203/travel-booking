import "./Featured.css"

const Featured = () => {
    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/688828.webp?k=6ff2042e10f68221007161a36c476226806abfe0a511a9104d45263cc0cedf55&o=" alt="featuredImg" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Đà Lạt</h1>
                        <p>2,144 chỗ ở</p>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/688952.webp?k=94205a05426361f6b2d71280c619b08cd585226f0618adaa01c6d6c380847f65&o=" alt="featuredImg" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Vũng Tàu</h1>
                        <p>1,824 chỗ ở</p>
                    </div>
                </div>
            </div>
            <div className="featured">
                <div className="featuredItem featuredItem1">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/688843.webp?k=cf7302d43a44850ddf8509da48c3198d4dda0aa75832b5737cc241249bf394aa&o=" alt="featuredImg" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Đà Nẵng</h1>
                        <p>2,511 chỗ ở</p>
                    </div>
                </div>
                <div className="featuredItem featuredItem1">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/688896.webp?k=ef0aaae945232ea726db3f63bd23b14bdebad56f3fa1961f54e5ea06813b3db2&o=" alt="featuredImg" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Sa Pa</h1>
                        <p>443 chỗ ở</p>
                    </div>
                </div>
                <div className="featuredItem featuredItem1">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/688906.webp?k=6b660c5d295f53392879d35893e48b7cf96be8311cca62eb903eaaed02090ad2&o=" alt="featuredImg" className="featuredImg" />
                    <div className="featuredTitle">
                        <h1>Nha Trang</h1>
                        <p>1,657 chỗ ở</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Featured