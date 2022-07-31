import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './login/loginReducer';
import signupReducer from './signup/signupReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'signup', 'userToken'],
};

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

export default persistReducer(persistConfig, rootReducer);
