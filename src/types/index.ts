export interface Guest {
  id: string;
  name: string;
  email?: string;
  attending?: boolean;
  message?: string;
  created_at: string;
}

export interface EventDetails {
  title: string;
  location: string;
  date: string;
  time: string;
  mapUrl: string;
}

export interface Photo {
  id: string;
  url: string;
  name: string;
}
