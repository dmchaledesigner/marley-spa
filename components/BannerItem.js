
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
                            {props.para1 ? (<p>{props.para1}</p>) : null}
                            {props.para2 ? (<p>{props.para2}</p>) : null}
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
