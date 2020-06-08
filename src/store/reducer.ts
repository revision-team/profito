import { State } from "./types";
import {
  Action,
  IDateRangeAction,
  INotificationAction,
  ISessionAction,
  IThemeAction,
  SET_NOTIFICATION,
  DEL_NOTIFICATION,
  CLS_NOTIFICATION,
  SET_DATE_RANGE,
  SET_SEL_DATE_RANGE,
  SET_SESSION,
  CLS_SESSION,
  SET_THEME,
  TOGGLE_THEME,
  SET_CHAT,
  IShowChatAction,
  TOGGLE_CHAT,
  UPDATE_TODO,
  ADD_TODO,
  AddTodo,
  IGenericAction,
  IAddTodoAction,
} from "./actions";
import { UserSession } from "models/users";

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    // THEMES
    case SET_THEME: {
      const { payload } = action as IThemeAction;
      return { ...state, theme: payload };
    }
    case TOGGLE_THEME: {
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    }
    // SHOW CHAT
    case SET_CHAT: {
      const { payload } = action as IShowChatAction;
      return { ...state, showChat: payload };
    }
    case TOGGLE_CHAT: {
      return { ...state, showChat: !state.showChat };
    }
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
    // SESSION
    case SET_SESSION: {
      const { payload } = action as ISessionAction;
      return { ...state, session: payload };
    }

    case CLS_SESSION: {
      return { ...state, session: {} as UserSession };
    }

    case UPDATE_TODO: {
      const { payload } = action as IGenericAction;
      return {
        ...state,
        todo: payload,
      };
    }

    case ADD_TODO: {
      const { payload } = action as IAddTodoAction;
      // El id se genera en el back y se pone aqui
      const itemId = `item-${Math.round(Math.random() * 1000)}`;
      const column = {
        ...payload.column,
        itemsIds: [itemId, ...payload.column.itemsIds],
      };

      const _state = { ...state };
      _state.todo.items[itemId] = { id: itemId, content: payload.todo };
      _state.todo.columns[column.id] = column;
      return _state;
    }
    // Nothing matched
    default: {
      return state;
    }
  }
};
