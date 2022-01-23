import Image from "next/image";
import styled from 'styled-components';
import appStoreBadge from '../public/img/app-store-badge.png';
import googleStoreBadge from '../public/img/google-play-badge-2x.png';
import edAppBadge from '../public/img/ed-web-badge-2x.png';
import Link from "next/link";

const Footer = () => {
    return (
        <FooterStyled>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-md-offset-3">
                        <hr /></div></div>


                <div className="row justify-content-center">
                    <div className="col-footer col-sm-6 col-md-2">
                        <h4 className="text-bold">Features</h4>
                        <ul className="ul-bare">
                            <li className="text-muted"><Link href="/lms-features/" rel="">LMS Features</Link></li>
                            <li className="text-muted"><Link href="/microlearning/" rel="">Microlearning</Link></li>
                            <li className="text-muted"><Link href="/elearning-gamification/" rel="">Gamification</Link></li>
                            <li className="text-muted"><Link href="/active-learning-platform/" rel="">Active Learning</Link></li>
                            <li className="text-muted"><Link href="/mobile-learning/" rel="">Mobile Learning</Link></li>
                            <li className="text-muted"><Link href="/authoring-tool/" rel="">Authoring Tool</Link></li>
                            <li className="text-muted"><Link href="/spaced-repetition/" rel="">Spaced Repetition</Link></li>
                            <li className="text-muted"><Link href="/rapid-refresh/" rel="">Rapid Refresh</Link></li>
                        </ul>
                    </div>


                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm">
                        <h4 className="text-bold">Product</h4><ul className="ul-bare">
                            <li className="text-muted"><Link href="/pricing/" rel="">Pricing</Link></li>
                            <li className="text-muted"><Link href="/lms-integration/" rel="">LMS Integration</Link></li>
                            <li className="text-muted"><Link href="/retail-lms/" rel="">Retail Training</Link></li>
                            <li className="text-muted"><Link href="/rapid-authoring/template-library/" rel="">Template Library</Link></li>
                            <li className="text-muted"><Link href="/educate-all/" rel="">Educate All</Link></li>
                        </ul>
                    </div>

                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm">
                        <h4 className="text-bold">Support</h4><ul className="ul-bare">
                            <li className="text-muted"><Link href="https://support.edapp.com/" target="_blank" rel="noopener">Support</Link></li>
                            <li className="text-muted"><Link href="/contact/" rel="">Contact Us</Link></li>
                            <li className="text-muted"><Link href="/webinars/" rel="">Webinars</Link></li>
                            <li className="text-muted"><Link href="/support/" rel="">Learner FAQs</Link></li>
                            <li className="text-muted"><Link href="/our-clients/" rel="">Our Clients</Link></li>
                            <li className="text-muted"><Link href="/ed-performance-team/" rel="">Ed Performance Team</Link></li>
                            <li className="text-muted"><Link href="/media/" rel="">Media</Link></li>
                        </ul>
                    </div>

                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm">
                        <h4 className="text-bold">Connect</h4><ul className="ul-bare">
                            <li className="text-muted"><Link href="/events/" rel="">Events</Link></li>
                            <li className="text-muted"><Link href="/blog/" rel="">Blog</Link></li>
                            <li className="text-muted"><Link href="https://www.facebook.com/thisisedapp/" target="_blank" rel="noopener">Facebook</Link></li>
                            <li className="text-muted"><Link href="https://www.instagram.com/thisisedapp/" target="_blank" rel="noopener">Instagram</Link></li>
                            <li className="text-muted"><Link href="https://www.linkedin.com/company/ed---micro-learning/" target="_blank" rel="noopener">LinkedIn</Link></li>
                            <li className="text-muted"><Link href="https://twitter.com/ThisisEdApp" target="_blank" rel="noopener">Twitter</Link></li>
                            <li className="text-muted"><Link href="https://www.youtube.com/c/EdAppMicrolearning" target="_blank" rel="noopener">YouTube</Link></li>
                            <li className="text-muted"><Link href="/careers/" rel="">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm hidden-sm">
                        <h4 className="text-bold">Legal</h4>
                        <ul className="ul-bare">
                            <li className="text-muted"><Link className="text-muted" href="/terms/">Terms</Link></li>
                            <li className="text-muted"><Link className="text-muted" href="/privacy-policy/">Privacy Policy</Link></li>
                            <li className="text-muted"><Link className="text-muted" href="/acceptableuse/">Acceptable Use</Link></li>
                            <li className="text-muted"><span className="text-sm">Ed © 2021</span></li>
                        </ul>
                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <AppStoreStyled>
                            <a className="download-link" href="https://apple.co/1RNEsSk" target="_blank" rel="noopener">
                                <Image src={appStoreBadge} width={156} height={48} />
                            </a>

                            <a className="download-link" href="https://bit.ly/1ZvyCv1" target="_blank" rel="noopener">
                                <Image src={googleStoreBadge} width={172} height={48} />
                            </a>


                            <a className="download-link" href="https://web.edapp.com" title="Welcome to EdApp" target="_blank">
                                <Image src={edAppBadge} width={176} height={48} />
                            </a>
                        </AppStoreStyled>
                    </div>
                </div>

            </div>



        </FooterStyled>
    );
}


const FooterStyled = styled.div`

        h4{
            color: #1f2e3c;
            font-weight: 500;
            text-align: left;
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
            
        }

        ul{
            list-style: none;
            margin: 0;
            padding: 0;

            li{
                list-style: none;
                margin: 0;
                padding: 0;
                text-align: left;
                margin-bottom: 0.8rem;
                color: #848f9d;
                &:last-child{
                    margin-bottom: 0;
                }

                a{
                    color: #848f9d;
                }
            }
        }

        hr{
            margin-bottom: 7rem;
            margin-top: 5rem;
            background: rgba(0,47,91,.7);
        }
`;


const AppStoreStyled = styled.div`
padding: 2rem 0;
background-color: #fff;
display: grid;
place-items: center;
place-content: center;
grid-template-columns: repeat(3, 1fr);

`



export default Footer;
