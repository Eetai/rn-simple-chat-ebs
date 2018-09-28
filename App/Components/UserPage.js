import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'

class Userpage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const userEmail = this.props.navigation.state.params
    const avatarUrl = GravatarApi.imageUrl({
      email: userEmail,
      parameters: { size: '50', d: 'monsterid' }
    }).replace('http', 'https')

    const styles = StyleSheet.create({
      roundedProfileImage: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 25
      }
    })
    return (
      <View>
        <Text>Userpage for:</Text>
        <Text>{userEmail}</Text>
        <Image style={styles.roundedProfileImage} source={{ uri: avatarUrl }} />
      </View>
    )
  }
}

export default Userpage
