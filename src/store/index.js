import {combineReducers} from 'redux'
import destinations from './destination'
import traditions from './tradition'
import foods from './food'
import destinationPhotos from './destinationPhoto'
import save from './saved'

export default combineReducers({traditions, destinations, foods, destinationPhotos, save})