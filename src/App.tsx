import { Stack } from '@mui/system'
import Circle from './components/Circle'
import Buttons from './components/Buttons'
import { useCircles } from './hooks/useCirclesContext'

function App() {
  const { circleList, onAddCircle, onRemoveLastCircle } = useCircles()

  return (
    <div>
      <Buttons
        onAddCircle={onAddCircle}
        onRemoveLastCircle={onRemoveLastCircle}
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
