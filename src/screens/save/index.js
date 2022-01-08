import React, {useState, useEffect, useRef, memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Scroller,
  SaveContainer,
  SaveButtonArea,
  CreateButtonArea,
  ListArea,
  ListItem,
  MainContainer,
  ScrollerContainer,
  ListItemText,
  LoadingIcon,
  HeaderArea,
  EditButtonText,
  LogoutButton,
  SaveInputArea,
  SaveAreaText,
} from './styles';
import InputLink from '../../components/input';
import Comfirm from '../../components/comfirm';
import InputIcon from '../../assets/InputIcon.svg';
import LinkIcon from '../../assets/LinkItem.svg';
import LogoLink from '../../assets/LogoLInk.svg';
import ArrowRightIcon from '../../assets/ArrowRight.svg';
import SaveIcon from '../../assets/SaveIcon.svg';
import NewLink from '../../assets/NewLink.svg';
import ArrowLeftIcon from '../../assets/ArrowLeft.svg';

import {
  collection,
  getDocs,
  onSnapshot,
  where,
  addDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import database from '../../config/firebaseconfig';

import AsyncStorage from '@react-native-async-storage/async-storage';
const Save = () => {
  const navigation = useNavigation();
  const modalRef = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleComfirm, setToggleComfirm] = useState({active: false, id: null});
  const [form, setForm] = useState({link: '', name: ''});
  const [links, setLinks] = useState([]);

  const onChangeText = (name, value) => {
    setForm({...form, [name]: value});
  };

  const togleCreateModal = event => {
    event.stopPropagation();
    const contain = modalRef.current === event.target;
    if (contain) {
      setToggleModal(false);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('jwt-savemylink');
    await AsyncStorage.removeItem('userId');
    navigation.reset({routes: [{name: 'SignIn'}]});
  };

  const handleCreateLink = async () => {
    if (form.link !== '' && form.name !== '') {
      try {
        const userId = await AsyncStorage.getItem('userId');
        const docRef = await addDoc(collection(database, 'Links'), {
          ...form,
          uid: userId,
        });
        if (docRef.id) {
          setLinks([
            ...links,
            {id: docRef.id, name: form.name, link: form.link},
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setToggleModal(false);
  };

  useEffect(() => {
    async function getLinkData() {
      const list = [];
      const userId = await AsyncStorage.getItem('userId');
      const q = query(
        collection(database, 'Links'),
        where('uid', '==', userId),
      );
      const linkData = await getDocs(q);
      linkData.forEach(doc => {
        list.push({...doc.data(), id: doc.id});
      });
      setLinks([]);
      setLinks(list);
    }
    onSnapshot(collection(database, 'Links'), doc => {
      getLinkData();
    });
  }, []);
  return (
    <MainContainer>
      <HeaderArea>
        <LogoutButton onPress={() => handleLogout()}>
          <ArrowLeftIcon width="35" height="35" fill="#fff" />
        </LogoutButton>
        <LogoLink width="80" height="80" fill="#5f2eea" />
      </HeaderArea>
      {toggleModal && (
        <SaveContainer
          activeOpacity={1}
          ref={modalRef}
          onPress={event => togleCreateModal(event)}>
          <SaveInputArea>
            <SaveAreaText>Criar novo</SaveAreaText>
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
            <CreateButtonArea onPress={() => handleCreateLink()}>
              <EditButtonText>Adicionar link</EditButtonText>
              <SaveIcon width="26" height="26" fill="#fff" />
            </CreateButtonArea>
          </SaveInputArea>
        </SaveContainer>
      )}
      <ScrollerContainer>
        <Scroller showsVerticalScrollIndicator={false}>
          <ListArea>
            {links.length > 0 ? (
              links?.map(link => (
                <ListItem
                  onPress={() => navigation.navigate('Details', {link: link})}
                  key={link?.id}
                  onLongPress={() =>
                    setToggleComfirm({active: true, id: link.id})
                  }>
                  <LinkIcon width="30" height="30" fill="#BCA4FF" />
                  <ListItemText numberOfLines={1} ellipsizeMode="tail">
                    {link?.name}
                  </ListItemText>
                  <ArrowRightIcon width="40" height="40" fill="#BCA4FF" />
                </ListItem>
              ))
            ) : (
              <LoadingIcon size="large" color="#ed2e7e" />
            )}
          </ListArea>
        </Scroller>
      </ScrollerContainer>
      <SaveButtonArea onPress={() => setToggleModal(true)}>
        <NewLink width="30" height="30" fill="#fff" />
      </SaveButtonArea>
      <Comfirm
        toggleComfirm={toggleComfirm}
        setToggleComfirm={setToggleComfirm}
      />
    </MainContainer>
  );
};

export default memo(Save);
