export interface HeaderStudentProps {
  nameStudent: string
  class: string
  shortName: string
  school: string
  iconSchool: React.ReactNode
  iconBack?: React.ReactNode
  onPressIconBack?: () => void
}
