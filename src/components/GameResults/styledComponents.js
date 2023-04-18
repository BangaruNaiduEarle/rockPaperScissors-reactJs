import styled from 'styled-components'

export const ResultGameContainer = styled.div``

export const ResultImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100vw;
    padding: 30px;
  }
`

export const Headings = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`

export const MyChoice = styled.img`
  width: 100px;
`
export const MyOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Result = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`

export const ResultButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  padding: 6px 20px 6px 20px;
  font-weight: 500;
  border-radius: 8px;
  border: 0px solid;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
