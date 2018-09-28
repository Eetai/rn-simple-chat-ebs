import { connect } from 'react-redux'
import AddMessage from '../Components/AddMessage'
import { addMessage } from '../Reducers/ChatReducer'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, { message }) => {
    return {
        addMessage: (message) => {
          dispatch(addMessage(message))
        }
      }
}

const ConnectedAddMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessage)

export default ConnectedAddMessage