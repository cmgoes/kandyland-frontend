import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions";

const initialState = {
  walletConnected: false,
  userAddress: "",
  usdcBalance: "0",
  usdtBalance: "0",
  daiBalance: "0",
  busdBalance: "0",
  ethBalance: "0",
  mRoyaBalance: "0",
  network: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        walletConnected: true,
        userAddress: action.address,
        network: action.network,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        walletConnected: false,
        userAddress: "",
        usdcBalance: "0",
        usdtBalance: "0",
        daiBalance: "0",
        ethBalance: "0",
        busdBalance: "0",
        network: "",
      };

    default:
      return state;
  }
};

export default userReducer;
