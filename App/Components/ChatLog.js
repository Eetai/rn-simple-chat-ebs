import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

class ChatLog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FlatList
        data={this.props.chats}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <ChatMessage navigation={this.props.navigation} chatMessage={item} />
        )}
      />
    )
  }
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ChatLog
