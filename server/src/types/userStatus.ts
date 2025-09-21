
export const UserStatus = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  AWAY: 'away',
  BUSY: 'busy',
} as const;

export type UserStatusType = typeof UserStatus[keyof typeof UserStatus];
