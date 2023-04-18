import styled from 'styled-components'

export const MainGamePageContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`
export const GameScoreBoardContainer = styled.div`
  width: 70vw;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
  margin-bottom: 50px;
`
export const GameItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  font-size: 18px;
  margin-bottom: 0px;
`

export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #223a5f;
  margin-top: 0px;
  font-weight: bold;
`

export const ScoreBoardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 30px 6px 30px;
`

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  padding: 30px;
`
export const CloseBtn = styled.button`
  border: 1px solid #ffffff;
  background-color: #ffffff;
`

export const CloseLineContainer = styled.div`
  text-align: right;
`
export const RulesImageContainer = styled.div`
  padding: 14px 24px 14px 24px;
  background-color: #ffffff;
  width: 600px;
  @media screen and (max-width: 767px) {
    width: 80vw;
    height: 50vh;
  }
`

export const RulesImage = styled.img`
  width: 100%;
`
export const RulesBtn = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 16px;
  color: #223a5f;
  padding: 6px 20px 6px 20px;
  border-radius: 8px;
  border: none;
`

export const UnOrderList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  width: 30vw;
  margin-top: 100px;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 70vw;
    margin-top: 0px;
  }
`
