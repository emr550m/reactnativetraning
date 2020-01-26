import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

export function useLoginCheck() { 
    const navigation = useNavigation();
    const app = useSelector(state => state.app);

    useEffect(() => {
        if (!app.isLoggedIn){ 
            navigation.navigate("login");
        } 
    },[app.isLoggedIn]);

    if (!app.isLoggedIn){ 
        navigation.navigate("login");
    }
       

    return false;
}