const initialState = {
  isAuthUser: false,
  login: {
    username: 'hruday@gmail.com',
    password: 'hruday123',
  },
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        isAuthUser: true,
      }
    case 'FAILED':
      return {
        ...state,
        isAuthUser: false,
      }

    default:
      return {
        ...state,
        isAuthUser: false,
      }
  }
}

export default loginReducer
