import Icon from "../components/Icons";
import { useState } from "react";

const Navigation = ({ navData, logo, avartar }) => {
    const [togglenav, setTogglenav] = useState(false);
    const openNav = (() => {
        setTogglenav(!togglenav)
    })
    return (
        <>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__info">
                    <div className="header__info--notification mr-20 mr-8-sm">
                        <Icon className="icon-24" id="notificaton-icon" />
                    </div>
                    <div className="header__info--notification">
                        <span className="d-none-sm f-14 fw-medium co-secondary">Austin Robertson</span>
                        <img className="header__info--image" src={avartar} alt="Profile pics" />
                    </div>
                    <div  onClick={openNav} className={`menu-toggler ml-12 ${togglenav ? 'opened' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </div>
            <div onClick={openNav} className={`menu-toggler__container ${togglenav ? 'opened' : ''}`}></div>
            <div className={`navigation ${togglenav ? 'opened' : ''}`}>
                <div className="navigation__first">
                    <ul>
                        {navData.filter(type => type.section === 'first').map((data, index) =>
                            <li key={index} className={`navigation__list ${index === 0 ? 'active' : ''}`}>
                                <a className="navigation__list--link" href="/">
                                    <Icon id={data.icon} />
                                    {data.title}
                                </a>
                            </li>
                        )}
                    </ul>
                    <ul>
                        {navData.filter(type => type.section === 'second').map((data, index) =>
                            <li key={index} className={`navigation__list`}>
                                <a className="navigation__list--link" href="/">
                                    <Icon id={data.icon} />
                                    {data.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <ul>
                        {navData.filter(type => type.section === 'third').map((data, index) =>
                            <li key={index} className={`navigation__list`}>
                                <a className="navigation__list--link" href="/">
                                    <Icon id={data.icon} />
                                    {data.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Navigation;