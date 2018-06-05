 import React from 'react';
import { StyleSheet, 
	Text,
	View,
} from 'react-native';

export default class profile extends React.Component {
	render() {
	    return (
	      	<View style={styles.container}>
	      		<Text style={styles.text}>Bienvenidos al Himalaya</Text>
	      	</View>
	    ); 
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e6ffee',
		paddingLeft: 40,
		paddingRight: 40,
	},
	text:{
		color: '#0000',
	}
});
