export interface Schedule {
    start: string;
    end: string;
    speeches: {
        room: string;
        topic?: string;
        speaker_id?: number;
        speakers?: {
            topic?: string;
            speaker_id?: number;
            start: string;
            end: string;
        }[]
    }[]
}
  