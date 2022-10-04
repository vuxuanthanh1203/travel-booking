import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Travel Booking</span>
                <div className="navItems">
                    <button className="navButton">Đăng ký</button>
                    <button className="navButton">Đăng Nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar