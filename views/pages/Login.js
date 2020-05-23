import React, { useState } from 'react';
import {material} from 'react-native-typography';
import {
  View,
  Text,
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import {StyleSheet} from 'react-native';

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

export default function Login() {
    const [state,setState] = useState({});
  const handleChange = ({text,name}) => {
      setState(state=>({
        ...state,
          [name]:text
      }))
      console.log(state);
  };
  return (
    <Container>
      <Header>
        <Body style={{flex: 1, alignItems: 'center'}}>
          <Title>Login Page</Title>
        </Body>
      </Header>
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
              onChangeText={text=>(handleChange({text,name:"email"}))}
            />
          </Item>
          <Item>
            <Input placeholder="passowrd" textContentType="password" secureTextEntry={true} onChangeText={text=>{ handleChange({text,name:"password"}) }}/>
          </Item>
          <Button style={styles.signInButtonContainer}>
            <Text style={styles.button}>SIGN IN</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
