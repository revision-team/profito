export class Notification {
  constructor(public message: string, public key: number) {}
}

export interface State {
  lang: string;
  theme: string;
  authenticated: boolean;
  notifications: Notification[];
}
