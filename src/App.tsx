import { useState } from 'react'
import { Stack } from '@mui/system'
import Circle from './components/Circle'
import Buttons from './components/Buttons'
import './App.css'

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
      <Buttons
        onAddCircle={handleAddCircle}
        onRemoveLastCircle={handleRemoveLastCircle}
      />
      <Stack flexDirection='row' flexWrap='wrap'>
        {circleList.map((bgColor, index) => (
          <Circle key={`${bgColor}${index}`} bgColor={bgColor} />
        ))}
      </Stack>
    </div>
  )
}

export default App
