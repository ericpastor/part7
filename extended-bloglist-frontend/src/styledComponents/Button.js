import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  color: #08f;
  font-size: 0.75em;
  margin: 0.4em;
  padding: 0.25em 0.5em;
  border: 1px solid #09f;
  border-radius: 7px;
  transiton: all 0.3s ease;

  &:hover {
    color: blue;
  }
`

export const ButtonDelete = styled.button`
  cursor: pointer;
  color: #f44336;
  font-size: 0.75em;
  margin: 0.4em;
  padding: 0.25em 0.5em;
  border: 1px solid #f44336;
  border-radius: 7px;
  transiton: all 0.3s ease;

  &:hover {
    color: red;
  }
`
