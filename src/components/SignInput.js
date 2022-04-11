import React from 'react';
import styled from 'styled-components/native'

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #83D6E3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
    color: #268596
`

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <IconSvg width="24" height="24" fill="#268596" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}