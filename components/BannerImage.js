
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { WrapperStyled, ContentStyles } from '../styles/resuableStyles';

const BannerImage = (props) => {
    return (
        <WrapperStyled>
            <div className="row justify-content-space-between">
                <div className="col-md-6">
                    <ContentStyles>
                        <div className={`row ${props.direction}`}>
                            <div className="col-sm-5 content">
                                <h2>{props.title}</h2>
                                {props.para1 ? (<p>{props.para1}</p>) : null}
                            </div>
                        </div>
                    </ContentStyles>
                </div>
            </div>
            <div className="col-md-5">
                asdasdas

            </div>

        </WrapperStyled>
    );
};


const ImageStyled = styled.div`
    width: 100%;

`;

export default BannerImage;
