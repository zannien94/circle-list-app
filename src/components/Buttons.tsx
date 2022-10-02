import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

interface IButtons {
  onAddCircle: () => void
  onRemoveLastCircle: () => void
}

export default function Buttons({ onAddCircle, onRemoveLastCircle }: IButtons) {
  return (
    <ButtonGroup variant='outlined'>
      <Button onClick={onAddCircle}>Add Circle</Button>
      <Button onClick={onRemoveLastCircle}>Remove Last Circle</Button>
    </ButtonGroup>
  )
}
