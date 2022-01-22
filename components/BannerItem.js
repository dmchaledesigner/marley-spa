import Image from 'next/image';
import styled from 'styled-components';

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
                            <p>Marley Spoon typically onboards new staff with face-to-face training, complemented by surveys. Since COVID-19, however, more people opted to order fresh ingredients to their doors, which resulted in a tremendous surge in demand.</p>
                            <p>As an essential business provider, Marley Spoon was able to hire the largest amount of staff in the smallest amount of time on record. Since classroom training was no longer a viable option, Marley Spoon required a solution that could easily onboard and train their hundreds of new team members efficiently and effectively.</p>
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


const ContentStyles = styled.div`
z-index: 1;
margin: 3rem 0;

.content{
    padding: 2.5rem;
    margin-right: 1rem;
    text-align: center;

    h2{
        font-size: 1.75rem;
        font-weight: 300;
        margin-bottom: 12px;
    }
}
`
