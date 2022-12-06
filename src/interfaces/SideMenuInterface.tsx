import { Dispatch, SetStateAction } from 'react'

export default interface SideMenuInterface {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setHowToPlayModal: Dispatch<SetStateAction<boolean>>
  handleTestConnection: () => void
  aboutModal: boolean
  setAboutModal: Dispatch<SetStateAction<boolean>>
}
