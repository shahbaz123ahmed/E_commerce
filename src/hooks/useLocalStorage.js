import { useEffect, useState } from "react";

function useLocalStorage() {
  const [account, setAccount] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);
  
  const item = "ACCOUNT";

  useEffect(() => {
    const accountStorage = localStorage.getItem(item);
    
    if (accountStorage) {
      setAccount(JSON.parse(accountStorage));
      setIsSignIn(true);
    }
  }, []);

  const signIn = (newAccount) => {
    if (newAccount) {
      localStorage.setItem(item, JSON.stringify(newAccount));
      setAccount(newAccount);
      setIsSignIn(true);
    }
  }

  const signOut = () => {
    localStorage.removeItem(item); // Clear the item from localStorage
    setAccount({});
    setIsSignIn(false);
  }

  return {
    account,
    signIn,
    signOut,
    isSignIn,
  };
}

export { useLocalStorage };
