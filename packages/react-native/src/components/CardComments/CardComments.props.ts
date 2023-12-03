interface DataButtons {
  id: number
  iconButton: React.ReactNode
  colorButton: string
  onClick: () => void
}

export interface CardCommentsProps {
  comment: string
  date: string
  status: string
  colorStatus: string
  buttons: DataButtons[]
}
