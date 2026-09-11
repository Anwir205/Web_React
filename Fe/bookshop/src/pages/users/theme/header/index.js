import { memo, useState } from "react";
import './style.scss';
import { AiOutlineFacebook, AiOutlineInstagram,AiFillBell,
    AiOutlineLinkedin,AiOutlineUser, 
AiFillFire, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Loại Sách",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Sách bán chạy",
                    path: "",
                },
                {
                    name: "Sách sắp phát hành",
                    path: "",
                },
                {
                    name: "Sách - Truyện Hay",
                    path: "",
                }
            ]
        },
        {
            name: "Bài Viết",
            path: "",
        },
        {
            name: "Liên Hệ" ,
            path: "",
        },
    ])

    return (
        <>
            <div className="header__top">
            <div className="container"> 
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li> 
                                <AiFillBell />
                                Welcome to Lovely Shop
                            </li>
                            <li>
                                <AiFillFire />
                                Miễn phí ship với đơn từ {formatter(200000)} 
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineUser />
                                </Link>
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
            </div>
            <div className="container">
            <div className="row">
                <div className=" col-xl-3 col-md-6">
                    <div className="header__logo">  
                        <h1>LoveLy Shop </h1>
                    </div>
                </div>
                <div className=" col-xl-6 col-md-6">
                    <div className="header__menu">
                        <ul>        
                            {menus?.map((menu, menuKey) => (
                                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                    <Link to={menu?.path}>
                                    {menu?.name}
                                    </Link>
                                    {
                                        menu.child && (
                                            <ul className="header_menu_dropdown">
                                                {menu.child.map((childItem, childKey) => (
                                                    <li key={'$(menuKey) - $(childKey)'}>
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                                ))}
                                            </ul>
                                        )
                                    }
                                </li>
                            ))}
                            </ul>
                            {/* <li>
                                <Link to="">Sách</Link>
                                <ul>
                                    <li>Sách bán chạy</li>
                                    <li>Sách bán chạy</li>
                                </ul>
                            </li> */}
                        
                    </div>
                </div>
                <div className=" col-xl-3 ">
                    <div className="header_cart">  
                        <div className="header_cart_prize">
                            <span>{formatter(100000)}</span>
                        </div>
                        <ul>    
                            <li>
                                <Link to="#">
                                    <AiOutlineShoppingCart /> <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
};

export default memo(Header);


