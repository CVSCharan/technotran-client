// Define the type for the data structure
export interface WhyChooseUsItem {
  id: number;
  imgSrc: string;
  desc: string;
}

export interface TrainingServicesItem {
  id: number;
  type: string;
  imgSrc: string;
  desc: string;
}

export interface SubmenuItem {
  title: string;
  link: string;
  external?: boolean;
}

export interface MenuItem {
  title: string;
  link?: string;
  submenu?: SubmenuItem[];
}

export interface IndustriesWeServeCarouselDataItem {
  id: number;
  imgSrc: string;
  title: string;
}

export interface ValuedClientsDataItem {
  id: number;
  imgSrc: string;
  name: string;
}

export interface TestimonialsCarouselDataItem {
  id: number;
  desc: string;
  imgSrc: string;
  name: string;
  designation: string;
}

export interface FooterMainCarouselDataItem {
  id: number;
  imgSrc: string;
}

export interface DesignServicesDataItem {
  id: number;
  title: string;
  desc: string;
  imgSrc: string;
}

export interface JobOrientedCoursesDataItem {
  id: number;
  title: string;
  desc: string;
  imgSrc: string;
}

export interface MouDataItem {
  id: number;
  name: string;
  imgSrc: string;
}

export interface CareersDataItem {
  id: number;
  title: string;
  desc: string;
}

export interface SchoolRoboticsLabImgsDataItem {
  id: number;
  imgSrc: string;
  title: string;
}

export interface IndustrialLabSolDataItem {
  id: number;
  imgSrc: string;
  title: string;
}

export interface EventsDataItem {
  id: number;
  title: string;
  dates: string;
  location: string;
  imgSrc: string;
}
