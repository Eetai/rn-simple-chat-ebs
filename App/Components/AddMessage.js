import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Button } from 'react-native'

class AddMessage extends React.Component {

    constructor(props) {
      super(props)
      this.state = { text: '' }
    }

handleButtonClick = () => {
    const { addMessage } = this.props
    addMessage(this.state.text)
}

render = () => {
    return (
      <View>
          <TextInput 
           style={{height: 20, width: 100, borderColor: '#841584', borderWidth: 2}}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
          />
          <Button
            onPress={this.handleButtonClick}
            title="Submit"
            color="#841584"
            />
      </View>
    )
  }
}


AddMessage.propTypes = {
    addMessage: PropTypes.func.isRequired,
}
  
  export default AddMessage