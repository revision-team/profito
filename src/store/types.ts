import { UserSession } from "models/users";
import { Action } from "./actions";

export type AvailableTheme = "light" | "dark";

export class Notification {
  constructor(public message: string, public key: number) {}
}

export class DateRange {
  constructor(
    public startDate: Date,
    public endDate: Date,
    public key: string
  ) {}
}

export interface EnvirormentTodo {
  items: any;
  columns: any;
  columnsOrder: any;
}

export interface StoreType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export interface State {
  // SYSTEM
  lang: string;
  theme: AvailableTheme;
  session: UserSession;
  // CHAT COLLAPSE
  showChat: boolean;
  // DATE RANGE
  dateRange: DateRange;
  selectedRange: DateRange;
  // COLLECTIONS
  notifications: Notification[];
  todo: EnvirormentTodo;
}
