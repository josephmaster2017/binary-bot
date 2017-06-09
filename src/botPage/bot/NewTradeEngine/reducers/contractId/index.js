import * as actions from '../../constants/actions';

const contractID = (state = '', action) => {
    switch (action.type) {
        case actions.PURCHASE_DONE:
            return action.payload;
        default:
            return state;
    }
};

export default contractID;
