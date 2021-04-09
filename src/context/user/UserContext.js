import React, { createContext, useContext, useEffect, useState } from "react";
import * as userApi from "../../service/userApi";
import * as productApi from "../../service/redeemApi";

const STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

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
    userApi
      .getUserData()
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        setErrors({ user: "Fail to load user information" });
        setLoading(false);
      });
  }, []);

  //   add points to user account handler
  async function handleAddpoints(amount) {
    try {
      await userApi.addPoints(amount);
      setUser({ ...user, points: user.points + amount });
    } catch (err) {
      throw err;
    }
  }

  // redeem product and update user points
  async function handleRedeemProduct(productId, cost) {
    try {
      await productApi.redeemProduct(productId);
      setUser({ ...user, points: user.points - cost });
    } catch (err) {
      throw err;
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
