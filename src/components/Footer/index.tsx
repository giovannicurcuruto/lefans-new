import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterAddress, FooterBody, FooterSocialMedia } from "./style";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function FooterComponent() {
    return (
        <>
            <FooterBody>
                <FooterAddress>
                    <div>
                        R. Comendador Clementino, 344 - Centro
                    </div>
                    <div>
                        contato@lefanseguros.com.br/administrativo@lefanseguros.com.br
                    </div>
                    <div>
                        WhatsApp: (92) 99404-7322/ Fixo: (92) 3085-7936
                    </div>

                </FooterAddress>
                <FooterSocialMedia>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />InstagramInstagram
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                        Facebook
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        Linkedin
                    </div>

                </FooterSocialMedia>




            </FooterBody>


        </>
    )
}