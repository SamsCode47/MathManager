import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import "./navbar.css";
import {mainLogo, calculator, home, table} from "../../assets";

const Navbar = ({toggle, handleToggle}) => {
    
    return (
        <>
            <nav className={`mm__navbar ${toggle && "thin"}`}>
                <div className='mm__navbar--header'>
                    <img className={`${toggle && "turn"}`} src={mainLogo} alt="logo" onClick={() =>{
                        handleToggle()
                    }
                    } 
                    />
                    {!toggle &&<p>Math <br /> Manager</p>}
                </div>
                <div className='mm__navbar--links_container'>
                    <div className="mm__navbar--links">
                        <a href="#Home">
                            <img src={home} alt="home" />
                            {!toggle &&<p>Home</p>}                    
                        </a>
                    </div>
                    <div className={`mm__navbar--links-seperator ${toggle && "shrink"}`}/>
                    <div className="mm__navbar--links">
                        <a href="#Calculator">
                            <img src={calculator} alt="calculator" />
                            {!toggle &&<p>Calculator</p>}
                        </a>
                    </div>
                    <div className={`mm__navbar--links-seperator ${toggle && "shrink"}`}/>
                    <div className="mm__navbar--links">
                        <a href="#GaußMethod">
                            <img src={table} alt="table" />
                            {!toggle &&<p>Gauß-Method</p>}                    
                        </a>
                    </div>
                </div>
                <div className='mm__navbar--footer'>
                    <p> by Sam the Man!! </p>
                </div>
            </nav>
            <nav className='mm__navbar--smallScreen'>
                <GiHamburgerMenu className='mm__navbar--smallScreen_menu' color="#fff" fontSize={27} onClick={() => handleToggle()} />
                {toggle &&
                <div className='mm__navbar--smallScreen_overlay slide-bottom'>
                    <MdOutlineClose className='mm__navbar--smallScreen_menu' color="#fff" fontSize={27} onClick={() => handleToggle()} />
                    <div className='mm__navbar--smallScreen_links-container'>
                        <div className="mm__navbar--smallScreen_links">
                            <a href="#Home" onClick={() => handleToggle()}>
                                <img src={home} alt="home" />
                                <p>Home</p>                   
                            </a>
                        </div>
                        <div className="mm__navbar--smallScreen_links">
                            <a href="#Calculator" onClick={() => handleToggle()}>
                                <img src={calculator} alt="calculator" />
                                <p>Calculator</p>
                            </a>
                        </div>
                        <div className="mm__navbar--smallScreen_links">
                            <a href="#GaußMethod" onClick={() => handleToggle()}>
                                <img src={table} alt="table" />
                                <p>Gauß-Method</p>                    
                            </a>
                        </div>
                    </div>
                </div>
                
                }
            </nav>
        </>
    )
}

export default Navbar