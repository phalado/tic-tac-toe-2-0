import { Dispatch, SetStateAction } from 'react'

export default interface HeaderInterface {
  howToPlayModal: boolean
  setHowToPlayModal: Dispatch<SetStateAction<boolean>>
  handleTestConnection: () => void
  aboutModal: boolean
  setAboutModal: Dispatch<SetStateAction<boolean>>
}
