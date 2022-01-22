import styled from "styled-components";
import Image from "next/image";
import edLogo from '../public/img/ed-logo-128x128.png';

const Navigation = (props) => {
    return (
        <HeaderStyles>
            <NavStyles className="container">
                <LogoStyles href="/">
                    <div className="logo-wrap">
                        <Image src={edLogo} width={40} height={40} />
                    </div>
                </LogoStyles>
                <NavItemsStyles className='left'>
                    <li><a href="/features">features</a></li>
                    <li><a href="/a-mobile-lms">a mobile lms</a></li>
                    <li><a href="/course-library">course library</a></li>
                    <li><a href="/industries">industries</a></li>
                    <li><a href="/educate-all-support">educate all support</a></li>
                    <li><a href="/testimonials">testimonials</a></li>
                    <li><a href="/pricing">pricing</a></li>
                </NavItemsStyles>

                <NavItemsStyles className="right">
                    <li><a href="/login">login</a></li>
                    <li><a href="/signup">sign up free</a></li>
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

                &:hover{

                }
        }


        &.left{
           margin-right: auto;
            li{
                margin-right: 0.6rem;
            }
        }


        &.right{

            li{
                margin-left: 0.6rem;
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
