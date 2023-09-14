import { useSelector } from "react-redux"

import { IUser, userData } from "./ducks/user"

export const useUserSelector = () => {
  const auth = useSelector((state: {user: IUser}) => state.user)
  return auth;

}