import PropTypes from 'prop-types';
import styled from 'styled-components';

import { WrapperStyled } from '../styles/resuableStyles';

const Video = (props) => {
    return (
        <WrapperStyled>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">

                        <iframe
                            className="video"
                            loading="lazy"
                            type="text/html"
                            width="100%"
                            height="480"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                            allowFullScreen=""
                            src={props.videoLink}
                            data-lf-yt-playback-inspected-xz1a5d7o03ldp3k2="true"></iframe>
                    </div>
                </div>
            </div>
        </WrapperStyled>
    );
};




Video.propTypes = {
    videoLink: PropTypes.string.isRequired,
}



export default Video;
