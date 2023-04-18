import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import Buttons from '../Buttons'
import GameResults from '../GameResults'

import {
  MainGamePageContainer,
  GameScoreBoardContainer,
  GameItemsContainer,
  Heading,
  ScoreBoardContainer,
  Para,
  Score,
  PopupContainer,
  CloseBtn,
  CloseLineContainer,
  RulesImageContainer,
  RulesImage,
  RulesBtn,
  UnOrderList,
} from './styledComponents'

class GamePage extends Component {
  state = {
    score: 0,
    gameOver: false,
    myOption: {},
    opponentOption: {},
    result: '',
  }

  playAgainBtn = () => this.setState({gameOver: false})

  onGetResults = () => {
    const {myOption, opponentOption, result} = this.state

    return (
      <GameResults
        myOption={myOption}
        opponentOption={opponentOption}
        result={result}
        playAgainBtn={this.playAgainBtn}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props

    const number = Math.floor(Math.random() * choicesList.length)

    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameOver: true,
        myOption: [id, image],
        opponentOption: choicesList[number],
        result: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameOver: true,
        myOption: [id, image],
        opponentOption: choicesList[number],
        result: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameOver: true,
        myOption: [id, image],
        opponentOption: choicesList[number],
        result: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === id) {
      this.setState(prevState => ({
        score: prevState.score + 0,
        gameOver: true,
        myOption: [id, image],
        opponentOption: choicesList[number],
        result: 'IT IS DRAW',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameOver: true,
        myOption: [id, image],
        opponentOption: choicesList[number],
        result: 'YOU WON',
      }))
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props

    return (
      <UnOrderList>
        {choicesList.map(each => (
          <Buttons
            key={each.id}
            each={each}
            onClickImage={this.onGetButtonId}
          />
        ))}
      </UnOrderList>
    )
  }

  render() {
    const {score, gameOver} = this.state

    return (
      <MainGamePageContainer>
        <GameScoreBoardContainer>
          <GameItemsContainer>
            <Heading>
              Rock <br />
              Paper <br />
              Scissors
            </Heading>
          </GameItemsContainer>

          <ScoreBoardContainer>
            <Para>Score</Para>
            <Score>{score}</Score>
          </ScoreBoardContainer>
        </GameScoreBoardContainer>

        {gameOver ? this.onGetResults() : this.onGetImages()}

        <PopupContainer>
          <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseBtn
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </CloseBtn>
                </CloseLineContainer>
                <>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </>
              </RulesImageContainer>
            )}
          </Popup>
        </PopupContainer>
      </MainGamePageContainer>
    )
  }
}

export default GamePage
