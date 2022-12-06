import { Dispatch, SetStateAction } from 'react'

export default interface HowToPlayModalInterface {
  howToPlayModal: boolean
  setHowToPlayModal: Dispatch<SetStateAction<boolean>>
}
