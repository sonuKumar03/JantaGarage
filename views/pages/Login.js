import React, {useState, useEffect} from 'react';
import {material} from 'react-native-typography';
import {
  View,
  Text,
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/JantaGarage/user/user';

const styles = StyleSheet.create({
  containerTitle: {
    marginTop: 128,
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 8,
    ...material.subheading,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    ...material.display2,
  },
  signInButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default function Login({navigation,route}) {
  const [state, setState] = useState({
    email:'',
    password:"",
    errors:{
      email:'',
      password:""
    }
  });
  console.log(route);
  const [user,setUser] = useState({});
  const [initializing,setInitializing] = useState(false);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleChange = ({text, name}) => {
    setState(state => ({
      ...state,
      [name]: text,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = ()=>{
    auth().signInWithEmailAndPassword(state.email,state.password).then((doc)=>{
        dispatch(loginUser(doc.user.uid));
        navigation.goBack();
    }).catch(error=>{
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    })
  }
  return (
    <Container>
      <Content>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.welcomeText}>Welcome to Janta Garage</Text>
        </View>
        <Form style={styles.form}>
          <Item>
            <Input
              clearTextOnFocus
              placeholder="Email"
              textContentType="emailAddress"
              value={state.email}
              onChangeText={text => handleChange({text, name: 'email'})}
            />
          </Item>
          <Item>
            <Input
              placeholder="passowrd"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={text => {
                handleChange({text, name: 'password'});
              }}
            />
          </Item>
          <Button style={styles.signInButtonContainer} onPress={handleSubmit}>
            <Text style={styles.button}>SIGN IN</Text>
          </Button>
        </Form>
        <View style={{flex: 1, alignItems: 'center', marginTop: 16}}>
          <Text style={{fontSize: 32}}>OR</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sign-Up');
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 16,
              backgroundColor: '#ff6b6b',
              alignSelf: 'center',
              paddingLeft: 8,
              paddingRight: 8,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 32, color: '#f7fff7'}}>JOIN US</Text>
          </View>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
