export interface WaitlistEntry {
  id?: number;
  email: string;
  created_at: string;
  source: string;
}

export interface WaitlistStats {
  total: number;
  recent: number;
}

export interface WaitlistResponse {
  stats: WaitlistStats;
  waitlist: WaitlistEntry[];
  message: string;
}
