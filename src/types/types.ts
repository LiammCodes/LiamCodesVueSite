export interface Language {
  name: string;
  style: string;
}

export interface ProjectData {
  name: string;
  description: string;
  longDescription: string;
  imgPath: string;
  languages: Language[];
  urlId: string;
}

export interface TimePeriodData {
  title: string,
  subtitle: string,
  dateRange: string,
}

export interface TimePeriods {
  work: TimePeriodData,
  education: TimePeriodData
}

