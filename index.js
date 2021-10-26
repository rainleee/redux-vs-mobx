const { createStore } = require('redux');
const { addPost } = require('./actions/post');
const { logIn, logOut } = require('./actions/user');
const reducer = require('./reducers');

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있어요.
  console.log('changed'); // 화면 바꿔주는 코드 여기서
});

console.log('1st', store.getState());

// store.dispatch({
//   type: 'LOG_IN_REQUEST',
// });

store.dispatch(
  logIn({
    id: 1,
    user: {
      data: {
        name: 'rainlee',
        admin: true,
      },
    },
  })
);
console.log('2nd', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요. 리덕스',
  })
);
console.log('3rd', store.getState());
store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: '두번째 리덕스',
  })
);
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());
