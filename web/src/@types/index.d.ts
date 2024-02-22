type Orphanage = {
  id: string;
  name: string;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: boolean;
  latitude: string;
  longitude: string;
  images: Image[];
};

type Image = {
  id: string;
  path: string;
  url: string;
};