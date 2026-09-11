import { memo } from "react";
import './style.scss';
import { AiOutlineFacebook, AiOutlineInstagram,AiFillBell,
    AiOutlineLinkedin, AiFillTwitterSquare,AiOutlineUser, 
AiFillFire } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const Header = () => {
    return (
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
                                <AiFillTwitterSquare />
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
    )
};

export default memo(Header);


