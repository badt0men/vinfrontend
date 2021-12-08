import React from 'react'
import styled from '@emotion/styled'

interface children{
    children: any,
    className?: any
}
const Button = styled.button`
    width: 200px;
    height: 40px;
    background: linear-gradient(180deg, #ED213A 0%, #93291E 100%);
    border-radius: 10px;
    &&:hover{
        background: linear-gradient(270deg, #ED213A 0%, #93291E 100%);
    }
`
export const RedButton = ({className, children}: children) => {
    return (
        <Button className={className} >{children}</Button>
    )
}
