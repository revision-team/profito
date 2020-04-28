import { State } from "./types";
import {
  Action,
  IDateRangeAction,
  INotificationAction,
  SET_NOTIFICATION,
  DEL_NOTIFICATION,
  CLS_NOTIFICATION,
  SET_DATE_RANGE,
  SET_SEL_DATE_RANGE,
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
    // DATE RANGE
    case SET_DATE_RANGE: {
      const { payload } = action as IDateRangeAction;
      return { ...state, dateRange: payload };
    }
    case SET_SEL_DATE_RANGE: {
      const { payload } = action as IDateRangeAction;
      return { ...state, selectedRange: payload };
    }
    // Nothing matched
    default: {
      return state;
    }
  }
};
