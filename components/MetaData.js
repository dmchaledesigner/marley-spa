import Head from "next/head";
import PropTypes from 'prop-types';


const MetaData = (props) => {

    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={props.keywords} />
            <meta name='description' content={props.description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{props.title}</title>
        </Head>
    )
}


export default MetaData;



MetaData.defaultProps = {
    keywords: "Keyword content goes here",
    description: "Description content goes here",
    title: "Title content goes here",
};


MetaData.propTypes = {
    keywords: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}



