import { UserSession } from "models/users";

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

export interface State {
  lang: string;
  theme: AvailableTheme;
  session: UserSession;
  notifications: Notification[];
  dateRange: DateRange;
  selectedRange: DateRange;
}
