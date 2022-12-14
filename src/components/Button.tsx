import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  type?: 'button' | 'reset' | 'submit'
  children: ReactNode | ReactNode[]
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  marginBottom?: string
}

export const Button = ({ type, children, onClick, disabled, marginBottom }: ButtonProps) => (
  <StyledButton onClick={onClick} disabled={disabled} type={type} marginBottom={marginBottom}>
    {children}
  </StyledButton>
)

const StyledButton = styled.button<{
  marginBottom?: string
}>`
  display: inline-block;
  width: 40%;
  height: 32px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #c9d1d9;
  background-color: #21262d;
  border: 1px solid rgba(240, 246, 252, 0.1);
  border-radius: 6px;
  padding: 5px 0;
  cursor: pointer;
  margin: 0 auto;

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}

  &:hover:enabled {
    background-color: #30363d;
    border: 1px solid #8b949e;
  }

  &:disabled {
    color: #8b949e;
    border: 1px solid #21262d;
    cursor: not-allowed;
  }
`
