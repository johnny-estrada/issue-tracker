// Give access to the current user, IF using auth && user is available.

// useUserData.js (Abstraction)
import { useAppSelector } from "./hooks";

const useCurrentUser = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo;
};

export default useCurrentUser;
