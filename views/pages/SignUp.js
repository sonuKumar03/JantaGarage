import React, {useState,useEffect} from 'react';
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
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import { loginUser } from '../../app/JantaGarage/user/user';
import { useDispatch } from 'react-redux';
import firestore  from '@react-native-firebase/firestore';
export default function SignUp({navigation}) {
  const [state, setState] = useState({
    password: '',
    c_password: '',
    email: '',
    errors: {
      c_password: null,
      email: null,
      password: null,
    },
  });
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleChange = ({text, name}) => {
    setState(state => ({
      ...state,
      [name]: text,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(state);
    if (state.password.localeCompare(state.c_password) !== 0) {
      setState(state => ({
        ...state,
        errors: {
          c_password: "password  didn't match",
        },
      }));
      setTimeout(() => {
        setState(state => ({
          ...state,
          errors: {
            c_password: null,
          },
        }));
      }, 2000);
    }
    auth().createUserWithEmailAndPassword(state.email,state.password).then((doc) => {
        console.log('User account created & signed in!');
        dispatch(loginUser(doc.user.uid));
        firestore().collection('users').doc(doc.user.uid).set({});
        navigation.navigate('Checkout');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        setState(state=>({...state,errors:{email:'That email address is already in use!'}}))
        }
        if (error.code === 'auth/invalid-email') {
        //   console.log('That email address is invalid!');
        setState(state=>({...state,errors:{email:'That email address is invalid!!'}}))
        }
        console.error(error);
      });
  };
  return (
    <Container>
      <Content>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>JOIN US</Text>
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
              placeholder="Passowrd"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={text => {
                handleChange({text, name: 'password'});
              }}
            />
          </Item>
          <Item>
            <Input
              placeholder="Confirm Passowrd"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={text => {
                handleChange({text, name: 'c_password'});
              }}
            />
          </Item>
          {state.errors.c_password ? (
            <Text
              style={{paddingLeft: 16, fontSize: 14, color: 'rgb(250,50,50)'}}>
              {state.errors.c_password}
            </Text>
          ) : null}
          <Button style={styles.signInButtonContainer} onPress={handleSubmit}>
            <Text style={styles.button}>JOIN US</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

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
