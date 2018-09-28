import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'

class ChatMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  goToUserPage = user => this.props.navigation.navigate('Userpage', user)

  render() {
    console.log(this.props)
    const avatarUrl = GravatarApi.imageUrl({
      email: this.props.chatMessage.user_email,
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

    return this.props.chatMessage.user_email === 'a@b.com' ? (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'flex-start',
          height: 60,
          maxHeight: 60
        }}
      >
        <TouchableHighlight
          onPress={() => this.goToUserPage(this.props.chatMessage.user_email)}
        >
          <Image
            style={styles.roundedProfileImage}
            source={{ uri: avatarUrl }}
          />
        </TouchableHighlight>

        <Text>{this.props.chatMessage.message}</Text>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'flex-end',
          height: 60,
          maxHeight: 60
        }}
      >
        <Text>{this.props.chatMessage.message}</Text>
        <TouchableHighlight
          onPress={() => this.goToUserPage(this.props.chatMessage.user_email)}
        >
          <Image
            style={styles.roundedProfileImage}
            source={{ uri: avatarUrl }}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

ChatMessage.propTypes = {
  chatMessage: PropTypes.object.isRequired
}

export default ChatMessage
