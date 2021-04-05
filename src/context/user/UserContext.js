import React, { createContext, useContext, useEffect, useState } from "react";
import * as api from "../../service/userApi";
import { redeemProduct } from "../../service/redeemApi";

const initialState = {
  _id: "",
  name: "",
  points: 0,
  redeemHistory: [],
  createDate: "",
};

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  //   get user data
  useEffect(() => {
    setErrors({});
    api
      .getUserData()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setErrors({ user: "Fail to load user information" });
        setLoading(false);
      });
  }, []);

  //   add points to user account handler
  async function handleAddpoints(amount) {
    setLoading(true);
    setErrors({});
    try {
      await api.addPoints(amount);
      setUser({ ...user, points: user.points + amount });
    } catch (err) {
      console.log(err);
      setErrors({ points: "Fail to add new points" });
    } finally {
      setLoading(false);
    }
  }

  // redeem product and update user points
  async function handleRedeemProduct(productId, cost) {
    try {
      await redeemProduct(productId);
      setUser({ ...user, points: user.points - cost });
    } catch (err) {
      console.log(err);
    }
  }

  const state = { user, loading, errors };
  const actions = {
    addPoints: handleAddpoints,
    redeemProduct: handleRedeemProduct,
  };
  const contextValue = { state, actions };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

// custom hook for consuming userContext
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "userContext must be used within UserProvider. Wrap a parent component in <UserProvider> to fix this error"
    );
  }
  return context;
}

export default UserProvider;
