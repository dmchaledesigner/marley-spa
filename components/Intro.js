import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';


const Intro = (props) => {
    return (
        <WrapperStyled>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <ImageStyled>
                            <Image src={props.image} width={props.imgwidth} height={props.imgheight} layout="intrinsic" alt="Marley Spoon" sizes='100vw' />
                        </ImageStyled>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>{props.heading}</h1>
                        <h2>{props.subheading}</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p>{props.content}</p>
                    </div>
                </div>

            </div>


        </WrapperStyled>
    );
};



Intro.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}




const WrapperStyled = styled.div`
padding: 5rem 0;
background-color: #fff;
text-align: center;

h1{
    font-size: 2.25rem;
    color: #1f2e3c;
    font-weight: 400;
}

h2{
    font-size: 1.33rem;
    color: #1f2e3c;
    font-weight: 300;
}

hr{
    outline: 0;
    border: none;
    margin: 3rem 0;
}
`;


const ImageStyled = styled.div`
    width: 100%;

    /* > div {
    position: unset !important;
  }

        .image{
            object-fit: contain;
            width: 100% !important;
            position: relative !important;
            height: unset !important;
        } */
`;



export default Intro;
