import { Fragment, ref } from 'react';

import Hero from '../components/Hero';
import Intro from '../components/Intro';
import MetaData from '../components/MetaData';
import BannerItem from '../components/BannerItem';
import Video from '../components/Video';
import QuoteBlock from '../components/QuoteBlock';
import BannerImage from '../components/BannerImage';


import marleyLogo from '../public/img/logo.png';
import headerImg from '../public/img/header.jpeg'
import yellowBg from '../public/img/yellowBackground.jpeg';
import greyBg from '../public/img/greyBackground.jpeg';
import pinkBg from '../public/img/pinkBackground.jpeg';
import phone from '../public/img/ms-lesson.png'


import { useInView } from 'react-intersection-observer';




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
        para1="Marley Spoon typically onboards new staff with face-to-face training, complemented by surveys. Since COVID-19, however, more people opted to order fresh ingredients to their doors, which resulted in a tremendous surge in demand."
        para2="As an essential business provider, Marley Spoon was able to hire the largest amount of staff in the smallest amount of time on record. Since classroom training was no longer a viable option, Marley Spoon required a solution that could easily onboard and train their hundreds of new team members efficiently and effectively."
        direction="justify-content-end"
      />


      <Video
        videoLink="https://www.youtube.com/embed/8J0QZndZU1U?modestbranding=1&amp;enablejsapi=1&amp;origin=https://www.edapp.com"
      />


      <BannerItem
        title='Onboarding hundreds of new team members during COVID-19'
        bgImg={greyBg}
        para1="EdApp facilitated Marley Spoon’s influx of new starters by reaching and training every new team member on crucial information. Before the implementation of EdApp, this would not have been possible to achieve at scale and in such a short period of time. While representing Marley Spon’s strong brand identity, EdApp enabled the delivery of vital information like food safety and procedures."
        direction="justify-content-start"
      />


      <QuoteBlock />



      <BannerItem
        title='An enhanced learning experience with EdApp'
        bgImg={pinkBg}
        para1="Marley Spoon has a large number of team members, who are divided into various sub-departments, meaning certain courses are targetted to train specific groups. Utilising EdApp’s features like User Groups and Push Notifications has enabled Marley Spoon to easily create and share content with these unique groups. When new content is ready, learners are notified in real-time with a push notification, sent straight to their mobile devices. Marley Spoon also incentivises its team members through EdApp’s built-in prizing feature. It sparks some friendly competition and winners are rewarded with real prizes."
        direction="justify-content-end"
      />



      <BannerImage
        title="test"
        para1="For companies like Marley Spoon who are dealing with food, health and safety is always a priority. EdApp microlessons allow learners to complete important lessons anytime, anywhere in small, digestible chunks. What’s more, content can be revisited regularly to ensure processes are completed and, more importantly, understood."
        para2="Whether employees are on-site at production centres, out delivering product or at the office, dispersed teams can complete their EdApp microlessons in five minutes or so, and revisit when it suits them. Lessons can be created, edited, and deployed to cohorts ensuring that all team members have the most up-to-date content at all times. The best part? All this can be done on learners’ mobile devices."
      />






    </Fragment>
  )
}
