import styled from 'styled-components';
import { WrapperStyled } from '../styles/resuableStyles';
import { whyEddApp } from '../pages/data/data';
import EdAppItem from './EdAppItem';

const EdAppList = (props) => {

    return (

        <ExtendedWrapperStyled>
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Why EdApp?</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12 grid">
                        {whyEddApp && whyEddApp.map((item) => (
                            <EdAppItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </ExtendedWrapperStyled>
    );
};


const ExtendedWrapperStyled = styled(WrapperStyled)`

h2{
    font-weight: 300;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 28px;

}


h3{
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 300;
    margin-bottom: 1rem;
   }

   p{
       color: #848f9d;
       font-size: 0.9rem;
       line-height: 1.4rem;
   }

   .grid{
    display: grid;
    padding: 0rem 3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
   }
   


`





export default EdAppList;
