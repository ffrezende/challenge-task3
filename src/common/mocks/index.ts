import { ArtifactDiscovery } from '../interfaces';

export const mockDiscoveries: ArtifactDiscovery[] = [
  new ArtifactDiscovery('May 12th 2023 at 10:15 UTC', 7, false),
  new ArtifactDiscovery('May 15th 2023 at 10:15 UTC', 9, true),
  new ArtifactDiscovery('May 15th 2023 at 11:30 UTC', 9, true),
  new ArtifactDiscovery('May 15th 2023 at 12:45 UTC', 9, false),
  new ArtifactDiscovery('May 15th 2023 at 05:45 UTC', 8, false),
  new ArtifactDiscovery('May 16th 2023 at 09:00 UTC', 7, true),
  new ArtifactDiscovery('May 16th 2023 at 11:00 UTC', 7, true),
];
