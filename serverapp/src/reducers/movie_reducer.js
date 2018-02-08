import { showMovie } from '../actions';

 export default (movie = null, action) => {
     switch (action.type) {
        case showMovie:
            console.log("You selected ", action.payload.data);
            return action.payload.data;
        default:
        return movie;
     };
 };