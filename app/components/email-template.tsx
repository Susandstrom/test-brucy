import * as React from 'react';
//Varför vill denna inte funka???

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

//email utseende
export function EmailTemplate({name, email, message}: EmailTemplateProps) {
    return(
        <div>
            <h1>Tack för ditt meddelande, {name}! </h1>
            <p>Vi uppskattar att ni vill komma i kontakt med oss och vi svara er så fort det är möjligt. Ni har kontaktat oss med mejladress: {email} och lämnat detta meddelande: {message}.</p>
        </div>
    );
}