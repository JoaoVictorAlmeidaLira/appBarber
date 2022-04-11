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
import PersonIcon from '../../assets/person.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import Api from '../../Api'

export default () => {

    const navigation = useNavigation();
    const [nameField, setNameField] = useState ('');
    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');


    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField)
            if (res.token) {
                alert ("deu certo")
            } else {
                alert('Erro' + res.error)
            }

        } else {
            alert ('preencha os campos!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name: 'SignIn'}]
        })
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>

                <SignInput IconSvg={PersonIcon}
                    placeholder='Digite seu nome'
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

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
                    <CustumButtonText>Cadastrar</CustumButtonText>
                </CustumButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ja possui uma conta ?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>   
    );
}
