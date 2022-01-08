import React, {memo, useState} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

import {deleteDoc, doc} from 'firebase/firestore';
import database from '../config/firebaseconfig';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

function Comfirm({toggleComfirm, setToggleComfirm}) {
  const navigation = useNavigation();
  const deleteLink = async id => {
    await deleteDoc(doc(database, 'Links', id));
  };
  const showConfirmDialog = () => {
    return Alert.alert(
      'Você tem certeza?',
      'Tem certerza que deseja remover esse link?',
      [
        {
          text: 'Yes',
          onPress: () => {
            deleteLink(toggleComfirm.id);
            setToggleComfirm({active: false, id: null});
            toggleComfirm.navigate
              ? navigation.navigate(toggleComfirm.navigate)
              : null;
          },
        },
        {
          text: 'No',
          onPress: () => {
            setToggleComfirm({active: false, id: null});
          },
        },
      ],
    );
  };
  if (toggleComfirm?.active === true) {
    showConfirmDialog();
  }
  return <></>;
}

export default memo(Comfirm);
