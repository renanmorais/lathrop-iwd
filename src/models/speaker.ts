export interface Speaker {
  id: number;
  name: string;
  tech: string;
  topic: string;
  title: string;
  mini_bio: string;
  photo: string;
  companyTitle: string;
  social_media: {
    instagram: string;
    twitter: string;
    linkedIn: string;
    github: string;
    website: string;
  };
}
