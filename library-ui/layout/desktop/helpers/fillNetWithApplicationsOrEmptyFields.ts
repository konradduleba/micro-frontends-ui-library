import {
  DesktopApplication,
  DesktopApplicationNet,
  NetApplicationTypes,
} from '../models';
import { NetDimensions, Dimension } from '../models';

export const fillNetWithApplicationsOrEmptyFields = (
  applications: DesktopApplication[],
  netDimensions: NetDimensions
): DesktopApplicationNet[] => {
  const { x, y } = netDimensions;

  const desktopApplicationNet: DesktopApplicationNet[] = [];

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const dimensionX: Dimension = i;
      const dimensionY: Dimension = j;

      const applicationWithThoseCoordinates: DesktopApplication | undefined =
        applications.find(
          ({ x, y }: DesktopApplication) => x === dimensionX && y === dimensionY
        );

      if (applicationWithThoseCoordinates) {
        const { icon, name } = applicationWithThoseCoordinates;

        desktopApplicationNet.push({
          type: NetApplicationTypes.FILLED,
          icon,
          name,
        });
      } else {
        desktopApplicationNet.push({ type: NetApplicationTypes.EMPTY });
      }
    }
  }

  return desktopApplicationNet;
};
