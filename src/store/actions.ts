import { Notification } from "./types";

// Action interface
export interface IAction {
  type: string;
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

// *****************
// UNION TYPE ACTION
// *****************
export type Action = IAction | INotificationAction;
