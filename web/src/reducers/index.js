import { combineReducers } from 'redux';
import { microphone } from './microphone.reducer'
import { songData } from './songData.reducer'
import { history } from './history.reducer'

const rootReducer = combineReducers({
  microphone,
  songData,
  history
});

export default rootReducer;
