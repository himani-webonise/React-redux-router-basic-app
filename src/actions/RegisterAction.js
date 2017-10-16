import { alertConstants } from '../app-constants/ActionType';
import { history } from '../routes'
import { store } from '../store/UserStore'

const register = function(message) {
    var message ="hi"
    store.dispatch(successRegisterAction(message));
    history.push('/home');
}

const successRegisterAction = function(message) {
    return {
        type: alertConstants.REGISTER,
        message
    }
}

export default register;