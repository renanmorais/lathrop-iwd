export interface Schedule {
    start: string;
    end: string;
    speeches: { 
        topic?:string; 
        speaker_id?: number;
    }[]
}
  