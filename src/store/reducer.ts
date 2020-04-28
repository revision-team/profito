import { State } from "./types";
import {
  SET_NOTIFICATION,
  DEL_NOTIFICATION,
  CLS_NOTIFICATION,
  Action,
  INotificationAction,
} from "./actions";

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    // NOTIFICATIONS
    case SET_NOTIFICATION: {
      const { payload } = action as INotificationAction;
      return {
        ...state,
        notifications: [...state.notifications, payload],
      };
    }
    case DEL_NOTIFICATION: {
      const { payload } = action as INotificationAction;
      return {
        ...state,
        notifications: state.notifications.filter((n) => n !== payload),
      };
    }
    case CLS_NOTIFICATION: {
      return { ...state, notifications: [] };
    }
    //
    default: {
      return state;
    }
  }
};
