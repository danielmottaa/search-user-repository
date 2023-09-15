import { useSelector } from "react-redux"

import { IUser } from "./ducks/user"

export const useUserSelector = () => {
  const userHistoric = useSelector((state: {user: IUser}) => state.user)
  return userHistoric;
}