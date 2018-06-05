import React from 'react';
import { StyleSheet, 
	Text,
	View, 
	TextInput,
	KeyboardAvoidingView, 
	TouchableOpacity, 
	AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
	Container, 
	Content, 
	Header, 
	Form, 
	Input, 
	Item, 
	Button, 
	Label
} from 'native-base';
import * as firebase from 'firebase';

const firebaseConfig = {
  	apiKey: "AIzaSyCmU8BXTfcoBg0HLok48jDd0wZdyZ7YOZo",
	authDomain: "plataform-tec.firebaseapp.com",
	databaseURL: "https://plataform-tec.firebaseio.com",
	projectId: "plataform-tec",
	storageBucket: "plataform-tec.appspot.com",
	messagingSenderId: "39631968540"
};
firebase.initializeApp(firebaseConfig);
export default class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}
	
	signUpUser = (email,password) =>{
		
		try{
			if(this.state.password.length<6){
				alert("Por favor ingrese una contraseña de mas de 6 caracteres")
				return;
			}
			firebase.auth().createUserWithEmailAndPassword(email,password)
			alert("Usuario creado exitosamente")
		}catch(error){
			alert(error.toString())
		}
	}

	loginUser = (email,password) =>{
		try{
			firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
				alert("Se logeo exitosamente")
			});
			//this.props.navigation.navigate{'HomeScreen'}
		}catch(error){
			alert(error.toString())
		}
	}

	render() {
	    return (
	      	<Container style={styles.container}>
      			<Form>
	      			<Text style={styles.header}>- LOGIN -</Text>
	      			<Item floatingLabel>
	      				<Label>Email</Label>
	      				<Input
	      					autoCorrect={false}
	      					autoCapitalize="none"
	      					onChangeText={(email) => this.setState({email})}
	      				/>
	      			</Item>
	      			<Item floatingLabel>
	      				<Label>Password</Label>
	      				<Input
	      					secureTextEntry={true}
	      					autoCorrect={false}
	      					autoCapitalize="none"
	      					onChangeText={(password) => this.setState({password})}
	      				/>
	      			</Item>
	      			<Button style={styles.btn}
	      				full
	      				rounded
	      				success
	      				onPress={()=> this.loginUser(this.state.email,this.state.password)}
	      			>
	      				<Text>Log in</Text>
	      			</Button>
	      			<Button style={styles.btnSU}
	      				full
	      				rounded
	      				primary
	      				onPress={()=>this.signUpUser(this.state.email, this.state.password)}
	      			>
	      				<Text>Sign up</Text>
	      			</Button>
      			</Form>
      		</Container>
	    ); 
	}
	
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#e6ffee',
		padding: 10,
	},
	header:{
		fontSize: 24,
		marginBottom: 60,
		color: '#000000',
		fontWeight: 'bold',
	},
	textInput:{
		alignSelf: 'stretch',
		padding: 16,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	btn: {
		alignSelf: 'stretch',
		backgroundColor: '#0088cc',
		padding: 20,
		alignItems: 'center',
	},
	btnSU: {
		alignSelf: 'stretch',
		backgroundColor: '#004d00',
		padding: 20,
		alignItems: 'center',
	}
});
