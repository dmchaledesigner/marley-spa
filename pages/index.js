import { Fragment } from 'react';

import Hero from '../components/Hero';
import Intro from '../components/Intro';
import MetaData from '../components/MetaData';
import BannerItem from '../components/BannerItem';

import marleyLogo from '../public/img/logo.png';
import headerImg from '../public/img/header.jpeg'
import yellowBg from '../public/img/yellowBackground.jpeg';



export default function Home(props) {
  return (
    <Fragment>

      <MetaData
        title='Case Studies - Marley Spoon'
        description='Marley Spoon & EdApp - A Retail Case Study'
        keywords='EdApp is a microlearning-based mobile Learning Management System (LMS).'
      />

      <Hero
        bgImg={headerImg}
      />

      <Intro
        imgwidth="333px"
        imgheight="48px"
        image={marleyLogo}
        heading="EdApp & Marley Spoon"
        subheading="A Food Services Case Study"
        content="This is how Marley Spoon leveraged EdApp to onboard hundreds of new employees to support the unprecedented growth brought on by COVID-19."
      />


      <BannerItem
        title='Onboarding hundreds of new team members during COVID-19'
        bgImg={yellowBg}
        direction="justify-content-end"
      />




    </Fragment>
  )
}
