export interface Speaker {
    id: number;
    name: string;
    location: {
        city: string;
        uf: string;
    };
    topic: string;
    title: string;
    photo: string;
    companyTitle: string;
}
