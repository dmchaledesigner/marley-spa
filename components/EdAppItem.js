import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const EdAppItem = (props) => {

    const { title, body, img } = props;

    return (
        <ItemBlockStyled>
            <div className="image-wrap">
                <Image src={img} alt={title} width={160} height={160} className='list-image' />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
        </ItemBlockStyled>
    );
};



const ItemBlockStyled = styled.div`

    display: flex;
    flex-direction: column;
    padding: 1rem;

   .image-wrap{
       margin-bottom: 2rem;
       display: inline-block;
    .list-image{
        border-radius: 50%;
        margin-bottom: rem;
    }
   }

}
`

export default EdAppItem;
