import React, {useState, useEffect} from 'react';
import {Linking, Alert} from 'react-native';

import Comfirm from '../../components/comfirm';
import {
  Container,
  CloseButtonArea,
  SaveButtonArea,
  EditButtonArea,
  RemoveButtonArea,
  MainContainer,
  EditButtonText,
} from './styles';
import InputLink from '../../components/input';
import InputIcon from '../../assets/InputIcon.svg';
import DeleteIcon from '../../assets/Delete.svg';
import ArrowLeftIcon from '../../assets/ArrowLeft.svg';
import SaveIcon from '../../assets/SaveIcon.svg';
import ExternalLink from '../../assets/ExternalLink.svg';
import {doc, updateDoc} from 'firebase/firestore';
import database from '../../config/firebaseconfig';

export default ({navigation, route}) => {
  const {link} = route.params;
  const [form, setForm] = useState(link);
  const [toggleComfirm, setToggleComfirm] = useState({
    active: false,
    id: null,
    navigate: '',
  });

  const onChangeText = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleAcessLink = () => {
    const reqUrl = form.link.toLowerCase();
    if (reqUrl.includes('http://') || reqUrl.includes('https://')) {
      Linking.openURL(reqUrl).catch(err => {
        alert('Não foi possivel abrir essa url' + err);
      });
    } else {
      Linking.openURL(`http://${reqUrl}`).catch(err => {
        alert('Não foi possivel abrir essa url' + err);
      });
    }
  };

  const handleUpdateLink = async () => {
    if (form.link !== '' && form.name !== '') {
      try {
        const docRef = doc(database, 'Links', link.id);
        await updateDoc(docRef, {
          name: form.name,
          link: form.link,
        });
        Alert.alert('Sucesso', 'Link atualizado!');
      } catch (error) {
        Alert.alert('Erro', 'Erro ao tentar atualizar o link!');
        console.log(error);
      }
    }
  };

  return (
    <MainContainer>
      <Container>
        <CloseButtonArea onPress={() => navigation.navigate('Save')}>
          <ArrowLeftIcon width="35" height="35" fill="#fff" />
        </CloseButtonArea>
        <InputLink
          placeholderColor="#D9DBE9"
          name="name"
          value={form.name}
          placeholder="Digite um nome para o link"
          onChangeText={onChangeText}
          Icon={<InputIcon width="24" height="24" fill="#A0A3BD" />}
        />
        <InputLink
          placeholderColor="#D9DBE9"
          name="link"
          value={form.link}
          placeholder="Digite/cole seu link aqui"
          onChangeText={onChangeText}
          Icon={<InputIcon width="24" height="24" fill="#A0A3BD" />}
        />
        <EditButtonArea onPress={() => handleUpdateLink()}>
          <EditButtonText>Save Edits</EditButtonText>
          <SaveIcon width="26" height="26" fill="#fff" />
        </EditButtonArea>
        <RemoveButtonArea
          onPress={() =>
            setToggleComfirm({active: true, id: link.id, navigate: 'Save'})
          }>
          <EditButtonText>Delete Link</EditButtonText>
          <DeleteIcon width="26" height="26" fill="#fff" />
        </RemoveButtonArea>
        <SaveButtonArea onPress={() => handleAcessLink()}>
          <ExternalLink width="26" height="26" fill="#fff" />
        </SaveButtonArea>
      </Container>
      <Comfirm
        toggleComfirm={toggleComfirm}
        setToggleComfirm={setToggleComfirm}
      />
    </MainContainer>
  );
};
