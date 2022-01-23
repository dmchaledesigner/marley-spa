
import Image from 'next/image';
import styled from 'styled-components';

const Hero = (props) => {

    return (
        <HeroStyled>
            <Image
                alt="Marley Spoon"
                src={props.bgImg}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </HeroStyled>
    );
};

export default Hero;



const HeroStyled = styled.div`
position: relative;
padding: 0;
margin: 0;
height: 60vh;
width: 100vw;
overflow: hidden;
z-index: 0;
`;
