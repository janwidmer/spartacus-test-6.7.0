import { getDefaultRoutes, MockRequest } from '@valantic/spartacus-mock';
import { HttpHandler, HttpResponse, http } from 'msw';
import { environment } from '../environments/environment';
import { languages } from './mock-data/languages/languages';

// default routes defined in the spartacus-mock library
const defaultRoutes = getDefaultRoutes(environment);

export const mockedRequests: MockRequest[] = [
  {
    url: defaultRoutes.languages,
    requestFunction: 'get',
  },
]

export const handlers: HttpHandler[] = [
  /**
   * Example for a custom handler
   */
  http.get(defaultRoutes.languages, () => {
    return HttpResponse.json(languages());
  })
];
