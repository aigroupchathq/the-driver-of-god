export interface DiagnosticSessionRecord {
  id: string;
  timestamp: string;
  formattedDate: string;
  selfWillScore: number;
  prideScore: number;
  selfCenterednessScore: number;
  playingGodScore: number;
  kenosisScore: number;
  primaryDriver: string;
  ignitionNode: string;
}

const STORAGE_KEY = 'driver_of_god_diagnostic_history_v1';

export const progressionStorage = {
  saveSession(session: Omit<DiagnosticSessionRecord, 'id' | 'timestamp' | 'formattedDate'>): DiagnosticSessionRecord {
    const history = progressionStorage.getHistory();
    const now = new Date();

    const record: DiagnosticSessionRecord = {
      ...session,
      id: `session_${Date.now()}`,
      timestamp: now.toISOString(),
      formattedDate: now.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Prepend newest session (keep last 12 sessions)
    const updatedHistory = [record, ...history].slice(0, 12);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch {
      // Storage fallback
    }

    return record;
  },

  getHistory(): DiagnosticSessionRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      return JSON.parse(data) as DiagnosticSessionRecord[];
    } catch {
      return [];
    }
  },

  clearHistory(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  },

  getTrend(): {
    trend: 'decreasing' | 'increasing' | 'stable' | 'initial';
    difference: number;
    message: string;
  } {
    const history = progressionStorage.getHistory();
    if (history.length < 2) {
      return {
        trend: 'initial',
        difference: 0,
        message: 'First session recorded. Complete another inquest in the future to map your ego transformation.'
      };
    }

    const latest = history[0].selfWillScore;
    const previous = history[1].selfWillScore;
    const diff = latest - previous;

    if (diff <= -5) {
      return {
        trend: 'decreasing',
        difference: Math.abs(diff),
        message: `Self-Will decreased by ${Math.abs(diff)}% since your prior inquest. Kenotic surrender is deepening.`
      };
    } else if (diff >= 5) {
      return {
        trend: 'increasing',
        difference: diff,
        message: `Self-Will increased by ${diff}% since your prior inquest. Unconscious demands for control have flared up.`
      };
    } else {
      return {
        trend: 'stable',
        difference: 0,
        message: 'Self-Will has remained steady across your recent inquiries.'
      };
    }
  }
};
