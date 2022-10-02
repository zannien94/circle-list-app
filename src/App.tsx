import { useState } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import './App.css'
import styled from '@emotion/styled'
import { Stack } from '@mui/system'

const StyledCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: yellow;
`

function App() {
  const [circleList, setCircleList] = useState<string[]>([])

  const handleAddCircle = (): void => {
    setCircleList([...circleList, 'lorem ipsum'])
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
        {circleList.map((circle, i) => (
          <StyledCircle key={i}>{circle}</StyledCircle>
        ))}
      </Stack>
    </div>
  )
}

export default App
