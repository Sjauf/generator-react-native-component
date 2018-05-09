import React, { Component } from 'react'
import {
	View,
	Text,
} from 'react-native'

import styles from './styles'

class <%= name %> extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text><%= name %></Text>
			</View>
		)
	}
}

export default <%= name %>