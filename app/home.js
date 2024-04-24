import React, { useLayoutEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ROUTES from '@/constants/routes';
import { HomeScreen } from '../screens';
import { router } from 'expo-router';

export default function Home() {
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    const fetchUserFromLocalStorage = async () => {
      const user = await AsyncStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    };

    const checkAuthentication = async () => {
      const user = await fetchUserFromLocalStorage();
      if (!user) {
        router.replace(ROUTES.AUTH.LOG_IN);
      } else {
        setUser(user);
      }
    };

    checkAuthentication();
  }
  , []);

  return <HomeScreen user={user} />;
}
