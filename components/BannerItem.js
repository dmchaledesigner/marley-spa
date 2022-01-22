
import Image from 'next/image';
import styled from 'styled-components';
import { ContentStyles } from '../styles/resuableStyles';

const BannerItem = (props) => {

    return (
        <BannerStyled>
            <Image
                alt="MarleySpoon"
                src={props.bgImg}
                layout="fill"
                objectFit="cover"
                quality={100}
                className='bgImage'
            />


            <div className="container">
                <ContentStyles>
                    <div className={`row ${props.direction}`}>

                        <div className="col-sm-5 content">
                            <h2>{props.title}</h2>
                            {props.para1 ? (<p>{props.para1}</p>) : null}
                            {props.para2 ? (<p>{props.para2}</p>) : null}
                            {props.blockQuote ? (
                                <QuoteText>
                                    <blockquote className="text-lg text-dark">EdApp allows for a more modern learning approach where our learners and our team members can access the materials anytime, anywhere.</blockquote>
                                    <figcaption className="text-sm text-normal">Aga Strzemeska, Head of People Operations, Marley Spoon</figcaption>
                                </QuoteText>
                            ) : null}
                        </div>
                    </div>
                </ContentStyles>
            </div>


        </BannerStyled>
    );
};

export default BannerItem;





const BannerStyled = styled.div`
position: relative;
padding: 2rem 0;
padding: 0;
margin: 0;
width: 100vw;
overflow: hidden;
z-index: 0;

    .bgImage{
        z-index: -1;
    }
`;

