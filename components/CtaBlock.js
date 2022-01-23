import React from 'react';
import styled from 'styled-components';
import { WrapperStyled } from '../styles/resuableStyles';

import Button from './ui/Button';



const CtaBlock = () => {

    const buttonHandler = (e) => {
        console.log(e.target.textContent)
    }


    return (
        <ExtendedWrapper>
            <div className="container text-center">

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2>EdApp is <span>easy-to-use and free</span> for you and your team. No credit card required.</h2>
                        <Button type="button" onClick={buttonHandler}> Sign up free</Button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <p>or <a href="mailto:demo@edapp.com">book a demo </a>with us today!</p>
                    </div>
                </div>



            </div>
        </ExtendedWrapper>

    );
};


const ExtendedWrapper = styled(WrapperStyled)`
background-color: #1f2e3c;
color: #fff;

h2{
    font-weight: 300;

    span{
        font-weight: 500;
    }
}

a{
    color: #46b4e9;
}
`

export default CtaBlock;
