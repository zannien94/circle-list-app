import { useState } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import './App.css'

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
    </div>
  )
}

export default App
