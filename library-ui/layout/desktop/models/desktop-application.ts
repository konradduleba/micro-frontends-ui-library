type Coordinate = number;
export type ApplicationName = string;
export type ApplicationIcon = string;

export interface DesktopApplication {
  x: Coordinate;
  y: Coordinate;
  name: ApplicationName;
  icon: ApplicationIcon;
}
