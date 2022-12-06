import { Dispatch, SetStateAction } from 'react'

export default interface HeaderInterface {
  howToPlayModal: boolean
  setHowToPlayModal: Dispatch<SetStateAction<boolean>>
}
