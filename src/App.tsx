import { useState } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import './App.css'
import styled from '@emotion/styled'
import { Stack } from '@mui/system'

const StyledCircle = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function App() {
  const [circleList, setCircleList] = useState<string[]>([])

  const handleAddCircle = (): void => {
    const bgColor = getRandomColor()
    setCircleList([...circleList, bgColor])
  }

  const handleRemoveLastCircle = (): void => {
    const newCircleList = [...circleList]
    newCircleList.pop()
    setCircleList(newCircleList)
  }

  return (
    <div className='App'>
      <ButtonGroup variant='outlined'>
        <Button onClick={handleAddCircle}>Add Circle</Button>
        <Button onClick={handleRemoveLastCircle}>Remove Last Circle</Button>
      </ButtonGroup>
      <Stack flexDirection='row' flexWrap='wrap'>
        {circleList.map((bgColor, index) => (
          <StyledCircle key={`${bgColor}${index}`} bgColor={bgColor}>
            lorem ipsum
          </StyledCircle>
        ))}
      </Stack>
    </div>
  )
}

export default App
