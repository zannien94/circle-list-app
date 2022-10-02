import { Stack } from '@mui/system'
import Circle from './components/Circle'
import Buttons from './components/Buttons'
import { useCircles } from './hooks/useCirclesContext'

function App() {
  const { circleList, onAddCircle, onRemoveLastCircle } = useCircles()

  return (
    <Stack alignItems='center' padding={4}>
      <Buttons
        onAddCircle={onAddCircle}
        onRemoveLastCircle={onRemoveLastCircle}
      />
      <Stack
        width='100%'
        flexDirection='row'
        flexWrap='wrap'
        alignItems='flex-start'
        gap={2}
        marginTop={3}
      >
        {circleList.map((bgColor, index) => (
          <Circle key={`${bgColor}${index}`} bgColor={bgColor} />
        ))}
      </Stack>
    </Stack>
  )
}

export default App
