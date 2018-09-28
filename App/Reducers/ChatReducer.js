const defaultState = [
  {
    user_email: 'a@b.com',
    message: 'Hello world!'
  }
]

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  user_email: defaultState[0].user_email,
  message
})

const chat = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let { user_email, message } = action
      return [
        ...state,
        {
          user_email,
          message
        }
      ]
    default:
      return state
  }
}

export default chat
