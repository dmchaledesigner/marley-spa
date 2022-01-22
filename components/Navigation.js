import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import edLogo from '../public/img/ed-logo-128x128.png';

const Navigation = (props) => {

    const [colorChange, setColorChange] = useState(true);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor)
    }, []);


    return (
        <HeaderStyles className={`${colorChange ? "solid" : ""}`}>
            <NavStyles className="container">
                <LogoStyles href="/">
                    <div className="logo-wrap">
                        <Image src={edLogo} width={40} height={40} />
                    </div>
                </LogoStyles>
                <NavItemsStyles className={`left ${colorChange ? "solid" : ""}`}>
                    <li><Link href="/features">features</Link></li>
                    <li><Link href="/a-mobile-lms">a mobile lms</Link></li>
                    <li><Link href="/course-library">course library</Link></li>
                    <li><Link href="/industries">industries</Link></li>
                    <li><Link href="/educate-all-support">educate all support</Link></li>
                    <li><Link href="/testimonials">testimonials</Link></li>
                    <li><Link href="/pricing">pricing</Link></li>
                </NavItemsStyles>

                <NavItemsStyles className={`right ${colorChange ? "solid" : ""}`}>
                    <li><Link href="/login">login</Link></li>
                    <li><Link href="/signup">sign up free</Link></li>
                </NavItemsStyles>


            </NavStyles>
        </HeaderStyles>
    );
};



const HeaderStyles = styled.div`
    position: fixed;
    top: 0;
    padding-top: 40px;
    width: 100%;
    background: transparent;
    z-index: 999;
    transition: 0.3s ease-in-out;

    &.solid{
        background-color: #fff;
        color: #000;
        -webkit-box-shadow: 0px 5px 23px 6px rgba(0,0,0,0.48); 
box-shadow: 0px 5px 23px 6px rgba(0,0,0,0.48);

    }
`;


const NavStyles = styled.div`
    max-width: 1080px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    padding-bottom: 10px;
`


const NavItemsStyles = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
        li{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        a{
            text-transform: uppercase;
            font-size: 0.9rem;
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: 1s ease-in-out;

            &:hover{
                        color: black;
                }
        }


        &.left{
           margin-right: auto;
            li{
                margin-right: 0.6rem;
            }
            &.solid{
                li>a{
                    color: #000;
                }
            }
        }


        &.right{

            li{
                margin-left: 0.6rem;
            }

            &.solid{
                li>a{
                    color: #000;
                }
            }
        }
`



const LogoStyles = styled.a`
display: inline-block;

        > div{
            margin-right: 10px;
            margin-top: -7px;
        }

`


export default Navigation;
