import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatLog = ({ chats }) => {
  return (
    <FlatList
      data={chats}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <ChatMessage chatMessage={item} />}
    />
  )
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
