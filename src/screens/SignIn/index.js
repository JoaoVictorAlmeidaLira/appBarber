import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Container,
         InputArea, 
         CustumButton, 
         CustumButtonText, 
         SignMessageButton, 
         SignMessageButtonText,
         SignMessageButtonTextBold }
         from './styles';
import BarberLogo from '../../assets/barber.svg'
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import Api from '../../Api'

export default () => {

    const navigation = useNavigation();
    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');


    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {
            let json = await Api.signIn(emailField, passwordField)
            if (json.token) {
                alert('deu certo') 
            }else{
                alert('senha e/ou email incorretos')
            }
        } else {
            alert('preencha os campos')
    }}
        

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name: 'SignUp'}]
        })
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>

                <SignInput IconSvg={EmailIcon}
                    placeholder='Digite seu email'
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput IconSvg={LockIcon}
                    placeholder='Digite sua senha'
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                

                <CustumButton onPress = {handleSignClick}>
                    <CustumButtonText>LOGIN</CustumButtonText>
                </CustumButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta ?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>   
    );
}