import { ApplicationName, ApplicationIcon } from './desktop-application';

export type Dimension = number;

export enum NetApplicationTypes {
  EMPTY = 'empty',
  FILLED = 'filled',
}

export interface NetDimensions {
  x: Dimension;
  y: Dimension;
}

export interface EmptyNet {
  type: NetApplicationTypes.EMPTY;
}

export interface NetWithApplication {
  type: NetApplicationTypes.FILLED;
  name: ApplicationName;
  icon: ApplicationIcon;
}

export type DesktopApplicationNet = EmptyNet | NetWithApplication;
