import {ImageButtonContainer, ImageButton, Image} from './styledComponents'

const Buttons = props => {
  const {each, onClickImage} = props
  const {id, imageUrl} = each
  const type = id.toLowerCase()
  console.log(`${type}Button`)

  const onClickImg = () => {
    onClickImage(id, imageUrl)
  }

  return (
    <ImageButtonContainer>
      <ImageButton
        type="button"
        data-testid={`${type}Button`}
        onClick={onClickImg}
      >
        <Image src={imageUrl} alt={id} />
      </ImageButton>
    </ImageButtonContainer>
  )
}

export default Buttons
