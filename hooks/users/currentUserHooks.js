import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCurrentUser = () => {
  const [activeUser, setActiveUser] = useState(null);
  const user = useSelector((state) => state?.auth?.user ?? null);
  useEffect(() => {
    setActiveUser(user);
  }, [user]);
  return activeUser;
};
