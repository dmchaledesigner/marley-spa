import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

import { WrapperStyled } from '../styles/resuableStyles';
import cuttlery from '../public/img/cutlery.png';



const QuoteBlock = () => {
    return (

        <ImageStyled>

            <div className="row justify-content-center image">
                <div className="col-md-4">
                    <Image src={cuttlery} layout='responsive' alt="cuttlery" />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <QuoteText>
                        <blockquote className="text-lg text-dark">EdApp allows for a more modern learning approach where our learners and our team members can access the materials anytime, anywhere.</blockquote>
                        <figcaption className="text-sm text-normal">Aga Strzemeska, Head of People Operations, Marley Spoon</figcaption>
                    </QuoteText>
                </div>
            </div>



        </ImageStyled>
    );
};



const ImageStyled = styled(WrapperStyled)`
    .image{
        margin-bottom: 30px;
    }
`



const QuoteText = styled.div`

       blockquote{
        display: block;
        position: relative;
        text-align: left;
        margin-left: 60px;
        font-size: 1.6rem;
        line-height: 1.8rem;;

        &:before{
            position: absolute;
            content: "“";
            font-size: 120px;
            top: -7px;
            line-height: .9;
            font-weight: 300;
            vertical-align: middle;
            left: -60px;
            color: #e6ebf0;
        }

        figcaption{
            text-align: left;
            padding-left: 60px;

        }
    }


`

export default QuoteBlock;
