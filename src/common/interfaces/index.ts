export interface IArtifactDiscovery {
  discoveryDate: string;
  digSite: number;
  artifact: {
    isPottery: boolean;
  };
}

export class ArtifactDiscovery {
  discoveryDate: string;
  digSite: number;
  artifact: {
    isPottery: boolean;
  };
  constructor(date: string, site: number, isPottery: boolean) {
    this.discoveryDate = date;
    this.digSite = site;
    this.artifact = { isPottery };
  }
}
