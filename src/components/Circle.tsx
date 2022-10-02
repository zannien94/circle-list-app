import styled from '@emotion/styled'

const StyledCircle = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`

interface ICircle {
  bgColor: string
}

export default function Circle({ bgColor }: ICircle) {
  return <StyledCircle bgColor={bgColor}>lorem ipsum</StyledCircle>
}
