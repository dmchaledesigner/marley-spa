import Image from 'next/image';
import styled from 'styled-components';

const Hero = (props) => {
    return (
        <HeroStyles>
            <Image
                alt="Mountains"
                src={props.img}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </HeroStyles>
    );
};

export default Hero;



const HeroStyles = styled.div`
position: relative;
padding: 0;
margin: 0;
height: 50vh;
width: 100vw;
overflow: hidden;
z-index: 0;
`;
