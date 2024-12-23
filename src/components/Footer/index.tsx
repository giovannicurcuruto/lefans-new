import { FooterAddress, FooterBody, FooterSocialMedia } from "./style";

export default function FooterComponent(){
    return(
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
                        Instagram
                    </div>
                    <div>
                        Facebook
                    </div>
                    <div>
                        Linkedin
                    </div>

                </FooterSocialMedia>




            </FooterBody>
        
        
        </>
    )
}