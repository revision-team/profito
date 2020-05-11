import { Notification, DateRange, AvailableTheme } from "./types";
import { UserSession } from "models/users";

// Action interface
export interface IAction {
  type: string;
}

// *************
// THEME ACTIONS
// *************

export const SET_THEME = "set_theme";
export const TOGGLE_THEME = "toggle_theme";

export interface IThemeAction extends IAction {
  payload: AvailableTheme;
}

export function SetTheme(theme: AvailableTheme): IThemeAction {
  return { type: SET_THEME, payload: theme };
}

export function ToggleTheme(): IAction {
  return { type: TOGGLE_THEME };
}

// *********************
// NOTIFICATIONS ACTIONS
// *********************
export const SET_NOTIFICATION = "set_notification";
export const DEL_NOTIFICATION = "del_notification";
export const CLS_NOTIFICATION = "cls_notification";

export interface INotificationAction extends IAction {
  payload: Notification;
}

let notif = 0;

export function SetNotification(message: string): INotificationAction {
  return {
    type: SET_NOTIFICATION,
    payload: new Notification(message, notif++),
  };
}

export function DelNotification(n: Notification): INotificationAction {
  return { type: DEL_NOTIFICATION, payload: n };
}

export function ClsNotification(): IAction {
  return { type: CLS_NOTIFICATION };
}

// ******************
// DATE RANGE ACTIONS
// ******************

export const SET_DATE_RANGE = "set_range";
export const SET_SEL_DATE_RANGE = "set_sel_range";

export interface IDateRangeAction extends IAction {
  payload: DateRange;
}

export function SetDateRange(range: DateRange): IDateRangeAction {
  return {
    type: SET_DATE_RANGE,
    payload: range,
  };
}

export function SetSelectedDateRange(range: DateRange): IDateRangeAction {
  return {
    type: SET_SEL_DATE_RANGE,
    payload: range,
  };
}
// ***************
// SESSION ACTIONS
// ***************

export const SET_SESSION = "set_session";
export const CLS_SESSION = "cls_session";

export interface ISessionAction extends IAction {
  payload: UserSession;
}

export function SetSession(user: UserSession): ISessionAction {
  return {
    type: SET_SESSION,
    payload: user,
  };
}

export function ClsSession(): IAction {
  return {
    type: CLS_SESSION,
  };
}

// *****************
// UNION TYPE ACTION
// *****************
export type Action =
  | IAction
  | IThemeAction
  | INotificationAction
  | IDateRangeAction
  | ISessionAction;
