import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterAddress, FooterBody, FooterSocialMedia, SpanSocialMedia } from "./style";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import img1 from '../../assets/logo-azul.png';


export default function FooterComponent() {
    return (
        <>
            <FooterBody>
                <FooterAddress>
                    <div></div>
                    <div>
                        R. Comendador Clementino, 344 - Centro
                    </div>
                    <div>
                        contato@lefanseguros.com.br/<span>administrativo@lefanseguros.com.br</span>
                    </div>
                    <div>
                        WhatsApp: (92) 99404-7322/ Fixo: (92) 3085-7936
                    </div>


                </FooterAddress>
                <FooterSocialMedia>
                    <div></div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        <SpanSocialMedia>Instagram</SpanSocialMedia>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                        <SpanSocialMedia>Facebook</SpanSocialMedia>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <SpanSocialMedia>Linkedin</SpanSocialMedia>
                        
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>

                </FooterSocialMedia>




            </FooterBody>


        </>
    )
}