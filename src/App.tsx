import { useState } from 'react'
import { Stack } from '@mui/system'
import Circle from './components/Circle'
import Buttons from './components/Buttons'
import { getRandomColor } from './utils/helpers'

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
    <div>
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
