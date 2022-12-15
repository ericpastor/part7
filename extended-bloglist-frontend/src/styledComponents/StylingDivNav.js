import styled from 'styled-components'

export const Navigation = styled.div`
  background: #b3e5fc;
  padding: 0.25em;
`

export const LoggedAndLogout = styled.div`
  font-size: 1em;
  text-align: center;
  color: #01579b;
`
export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #01579b;
`
export const Margins = styled.div`
  margin-right: 40px;
  margin-left: 60px;
`
export const Td = styled.td`
  border: 1px solid #09f;
  border-radius: 7px;
  transiton: all 0.3s ease;

  &:hover {
    color: blue;
  }
`

export const CenterScreen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
