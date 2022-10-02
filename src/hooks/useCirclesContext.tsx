import { createContext, useContext, useState } from 'react'
import { getRandomColor } from '../utils/helpers'

type ICirclesContext = {
  circleList: string[]
  onAddCircle: () => void
  onRemoveLastCircle: () => void
}

const CirclesContext = createContext<ICirclesContext>({} as ICirclesContext)

export function CirclesProvider({ children }: { children: React.ReactNode }) {
  const [circleList, setCircleList] = useState<string[]>([])

  const handleAddCircle = (): void => {
    const bgColor = getRandomColor()
    setCircleList([...circleList, bgColor])
  }

  const handleRemoveLastCircle = (): void => {
    if (!circleList.length) {
      return
    }
    const newCircleList = [...circleList]
    newCircleList.pop()
    setCircleList(newCircleList)
  }

  const value = {
    circleList,
    onAddCircle: handleAddCircle,
    onRemoveLastCircle: handleRemoveLastCircle,
  }

  return (
    <CirclesContext.Provider value={value}>{children}</CirclesContext.Provider>
  )
}

export function useCircles() {
  return useContext(CirclesContext)
}
