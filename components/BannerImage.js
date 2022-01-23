
import Image from 'next/image';
import styled from 'styled-components';
import { WrapperStyled, ContentStyles } from '../styles/resuableStyles';
import phone from '../public/img/ms-lesson.png'

const BannerImage = (props) => {
    return (

        <WrapperStyled>
            <div className="container">
                <div className={`row ${props.direction}`}>
                    <div className="col-md-6">
                        <ContentStyles>
                            <h2>Why EdApp works for the food delivery and food manufacturing industries</h2>
                            <p>For companies like Marley Spoon who are dealing with food, health and safety is always a priority. EdApp microlessons allow learners to complete important lessons anytime, anywhere in small, digestible chunks. What’s more, content can be revisited regularly to ensure processes are completed and, more importantly, understood.</p>
                            <p>Whether employees are on-site at production centres, out delivering product or at the office, dispersed teams can complete their EdApp microlessons in five minutes or so, and revisit when it suits them. Lessons can be created, edited, and deployed to cohorts ensuring that all team members have the most up-to-date content at all times. The best part? All this can be done on learners’ mobile devices.</p>
                        </ContentStyles>
                    </div>

                    <div className="col-md-5">
                        <ImageStyled>
                            <Image src={phone} layout="responsive" alt="Marley Spoon" />
                        </ImageStyled>
                    </div>
                </div>
            </div>
        </WrapperStyled>
    );
};



const ContentExtended = styled(ContentStyles)`
text-align: left;
`

const ImageStyled = styled.div`
    width: 100%;
    position: relative;

`;




export default BannerImage;
