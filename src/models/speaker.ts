interface Speaker {
    id: number;
    speaker_name: string;
    location: {
        city: string;
        uf: string;
    };
    topic: string;
    title: string;
}
