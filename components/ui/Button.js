import React from 'react';
import styled from 'styled-components';


const Button = (props) => {

    return (
        <BtnStyled
            {...props.btn}
            type={props.type}
            className={`btn ${props.className}`}
            onClick={props.onClick}

        >{props.children}
        </BtnStyled>
    );
};



export const BtnStyled = styled.button`
    background-color: #46b4e9;
    background-image: linear-gradient(#46b4e9,#0070af);
    color: #fff;
    text-shadow: 0 0 5px rgb(255 255 255 / 30%);
    display: inline-block;
    min-width: 150px;
    width: 300px;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 10px 11px;
    margin: 1.8rem 0rem 1rem;
    border: none;

   `;

export default Button;
