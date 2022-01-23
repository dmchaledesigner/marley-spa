import PropTypes from 'prop-types';
import styled from 'styled-components';

import { WrapperStyled } from '../styles/resuableStyles';
import cuttlery from '../public/img/cutlery.png';



const QuoteBlock = () => {
    return (

        <ExtendedWrapper>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <QuoteText>
                        <blockquote className="text-lg text-dark">Food business and manufacturing are very fast-paced environments. So having a product [like EdApp] that can keep up with these changes is extremely valuable.</blockquote>
                    </QuoteText>
                </div>
            </div>



        </ExtendedWrapper>
    );
};


const ExtendedWrapper = styled(WrapperStyled)`
padding: 0rem 0rem 05rem 0rem
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

       
    }


`

export default QuoteBlock;
