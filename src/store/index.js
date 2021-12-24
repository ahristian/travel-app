import {combineReducers} from 'redux'
import destinations from './destination'
import traditions from './tradition'
import foods from './food'
import profile from './profile'
import destinationPhotos from './destinationPhoto'
import save from './saved'
import auth from "./auth"/*
import profileActivationToken from "./activation"
*/

export default combineReducers({traditions, profile, destinations, foods, destinationPhotos, save, auth})