import { IArtifactDiscovery } from './common/interfaces';
import { mockDiscoveries } from './common/mocks';

interface IDiscoveriesByDateAndDigSite {
  [date: string]: { [digSite: number]: Array<IArtifactDiscovery> };
}

const mergeDiscoveriesByDateAndDigSite = (
  discoveries: Array<IArtifactDiscovery>,
): IDiscoveriesByDateAndDigSite => {
  const mergedData: IDiscoveriesByDateAndDigSite = {};

  for (const discovery of discoveries) {
    const [date] = discovery.discoveryDate.split(' at ');
    const digSite = discovery.digSite;

    if (!mergedData[date]) {
      mergedData[date] = {};
    }

    if (!mergedData[date][digSite]) {
      mergedData[date][digSite] = [];
    }

    mergedData[date][digSite].push(discovery);
  }

  return mergedData;
};

const calculatePotteryPercentage = (
  artifactDiscoveries: Array<IArtifactDiscovery>,
): number => {
  const potteryCount = artifactDiscoveries.filter(
    (discovery) => discovery.artifact.isPottery,
  ).length;
  const totalDiscoveries = artifactDiscoveries.length;

  return (potteryCount / totalDiscoveries) * 100;
};

function createPotteryPercentageMessage(
  date: string,
  digSite: number,
  potteryPercentage: number,
): string {
  return `On ${date} at dig site ${digSite} had ${potteryPercentage.toFixed(
    2,
  )}% of its discoveries as pottery.`;
}

const potteryPercentages = (discoveries: Array<IArtifactDiscovery>): void => {
  const listDiscoveryByDateAndDigSite =
    mergeDiscoveriesByDateAndDigSite(discoveries);

  for (const date in listDiscoveryByDateAndDigSite) {
    const discoveryByDateAndDigSite = listDiscoveryByDateAndDigSite[date];
    for (const digSite in discoveryByDateAndDigSite) {
      const artifactDiscoveries = discoveryByDateAndDigSite[digSite];
      const potteryPercentage = calculatePotteryPercentage(artifactDiscoveries);

      const message = createPotteryPercentageMessage(
        date,
        parseInt(digSite),
        potteryPercentage,
      );

      console.log(message);
    }
  }
};

potteryPercentages(mockDiscoveries);
