import { MockConfig } from '@valantic/spartacus-mock';
import { environment } from '../environments/environment';
import { handlers, mockedRequests } from './handlers';
import { passThroughRequests } from './pass-through';

// see https://valantic.gitbook.io/spartacus-mock/api-reference/options for the different options
export const mockConfig: MockConfig = {
  enableWorker: environment.mockServer || false,
  environment,
  passThroughRequests,
  handlers,
  //mockedRequests,
  enableDefaultData: true,
  inclusionMode: false,
  debug: true,
};

export async function prepareMockServer(): Promise<ServiceWorkerRegistration | undefined> {
  const { prepareMock } = await import(/* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock');

  return prepareMock(mockConfig);
}
