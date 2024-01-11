export type Weather = {
  main: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
    seaLevel: number;
    grndLevel: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  sys: {
    country: string;
  };
  name: string;
};
