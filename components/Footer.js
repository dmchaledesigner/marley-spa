import Image from "next/image";
import appStoreBadge from '../public/img/app-store-badge.png';
import googleStoreBadge from '../public/img/google-play-badge-2x.png';
import edAppBadge from '../public/img/ed-web-badge-2x.png';

const Footer = () => {
    return (
        <footer className="block-v-sm __active" id="footer">
            <div className="container text-sm-center text-light __active">
                <div className="row block-v-md __active">
                    <div className="col-md-6 col-md-offset-3">
                        <hr /></div></div><div className="row block-v-md">


                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm col-md-offset-1">
                        <h4 className="text-bold">Features</h4>
                        <ul className="ul-bare">
                            <li className="text-muted"><a href="/lms-features/" rel="">LMS Features</a></li>
                            <li className="text-muted"><a href="/microlearning/" rel="">Microlearning</a></li>
                            <li className="text-muted"><a href="/elearning-gamification/" rel="">Gamification</a></li>
                            <li className="text-muted"><a href="/active-learning-platform/" rel="">Active Learning</a></li>
                            <li className="text-muted"><a href="/mobile-learning/" rel="">Mobile Learning</a></li>
                            <li className="text-muted"><a href="/authoring-tool/" rel="">Authoring Tool</a></li>
                            <li className="text-muted"><a href="/spaced-repetition/" rel="">Spaced Repetition</a></li>
                            <li className="text-muted"><a href="/rapid-refresh/" rel="">Rapid Refresh</a></li>
                        </ul>
                    </div>


                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm">
                        <h4 className="text-bold">Product</h4><ul className="ul-bare">
                            <li className="text-muted"><a href="/pricing/" rel="">Pricing</a></li>
                            <li className="text-muted"><a href="/lms-integration/" rel="">LMS Integration</a></li>
                            <li className="text-muted"><a href="/retail-lms/" rel="">Retail Training</a></li>
                            <li className="text-muted"><a href="/rapid-authoring/template-library/" rel="">Template Library</a></li>
                            <li className="text-muted"><a href="/educate-all/" rel="">Educate All</a></li>
                        </ul>
                    </div>

                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm">
                        <h4 className="text-bold">Support</h4><ul className="ul-bare">
                            <li className="text-muted"><a href="https://support.edapp.com/" target="_blank" rel="noopener">Support</a></li>
                            <li className="text-muted"><a href="/contact/" rel="">Contact Us</a></li>
                            <li className="text-muted"><a href="/webinars/" rel="">Webinars</a></li>
                            <li className="text-muted"><a href="/support/" rel="">Learner FAQs</a></li>
                            <li className="text-muted"><a href="/our-clients/" rel="">Our Clients</a></li>
                            <li className="text-muted"><a href="/ed-performance-team/" rel="">Ed Performance Team</a></li>
                            <li className="text-muted"><a href="/media/" rel="">Media</a></li>
                        </ul>
                    </div>

                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm">
                        <h4 className="text-bold">Connect</h4><ul className="ul-bare">
                            <li className="text-muted"><a href="/events/" rel="">Events</a></li>
                            <li className="text-muted"><a href="/blog/" rel="">Blog</a></li>
                            <li className="text-muted"><a href="https://www.facebook.com/thisisedapp/" target="_blank" rel="noopener">Facebook</a></li>
                            <li className="text-muted"><a href="https://www.instagram.com/thisisedapp/" target="_blank" rel="noopener">Instagram</a></li>
                            <li className="text-muted"><a href="https://www.linkedin.com/company/ed---micro-learning/" target="_blank" rel="noopener">LinkedIn</a></li>
                            <li className="text-muted"><a href="https://twitter.com/ThisisEdApp" target="_blank" rel="noopener">Twitter</a></li>
                            <li className="text-muted"><a href="https://www.youtube.com/c/EdAppMicrolearning" target="_blank" rel="noopener">YouTube</a></li>
                            <li className="text-muted"><a href="/careers/" rel="">Careers</a></li>
                        </ul>
                    </div>

                    <div className="col-footer col-sm-6 col-md-2 text-sm-center block-v-sm hidden-sm">
                        <h4 className="text-bold">Legal</h4>
                        <ul className="ul-bare">
                            <li className="text-muted"><a className="text-muted" href="/terms/">Terms</a></li>
                            <li className="text-muted"><a className="text-muted" href="/privacy-policy/">Privacy Policy</a></li>
                            <li className="text-muted"><a className="text-muted" href="/acceptableuse/">Acceptable Use</a></li>
                            <li className="text-muted"><span className="text-sm">Ed © 2021</span></li>
                        </ul>
                    </div>

                </div>

                <div className="row block-v-sm">
                    <div className="col-sm-12 text-center">
                        <a className="download-link" href="https://apple.co/1RNEsSk" target="_blank" rel="noopener">
                            <Image src={appStoreBadge} width={156} height={48} />
                        </a>

                        <a className="download-link" href="https://bit.ly/1ZvyCv1" target="_blank" rel="noopener">
                            <Image src={googleStoreBadge} width={172} height={48} />
                        </a>


                        <a className="download-link" href="https://web.edapp.com" title="Welcome to EdApp" target="_blank">
                            <Image src={edAppBadge} width={176} height={48} />
                        </a>
                    </div>
                </div>

            </div>



        </footer>
    );
}

export default Footer;
