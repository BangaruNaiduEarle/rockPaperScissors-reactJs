import {
  ResultGameContainer,
  MyOption,
  MyChoice,
  ResultButton,
  ResultImagesContainer,
  Headings,
  Result,
  ResultContainer,
} from './styledComponents'

const GameResults = props => {
  const {myOption, opponentOption, result, playAgainBtn} = props
  console.log(myOption[1])

  const onClickPlayBtn = () => {
    playAgainBtn()
  }

  return (
    <ResultGameContainer>
      <ResultImagesContainer>
        <MyOption>
          <Headings>YOU</Headings>
          <MyChoice src={myOption[1]} alt="your choice" />
        </MyOption>

        <MyOption>
          <Headings>OPPONENT</Headings>
          <MyChoice src={opponentOption.imageUrl} alt="opponent choice" />
        </MyOption>
      </ResultImagesContainer>

      <ResultContainer>
        <Result>{result}</Result>
        <ResultButton type="button" onClick={onClickPlayBtn}>
          PLAY AGAIN
        </ResultButton>
      </ResultContainer>
    </ResultGameContainer>
  )
}

export default GameResults
