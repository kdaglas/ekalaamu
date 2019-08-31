const createSpyObj = (name: string, methods: string[]) => jasmine.createSpyObj(name, methods);


export const routerSpy = createSpyObj('Router', ['navigate']);

export const toasterServiceSpy = createSpyObj('ToasterService', ['onSuccess', 'onFailure', 'onInfo']);

export const authServiceSpy = createSpyObj('AuthService', [
  'signup', 'currentUserSubject',
  'signIn',
  'authState'
]);

export const socialAuthServiceSpy = createSpyObj('SocialAuthService', [
  'authenticate',
  'twitterAuth'
]);

export const httpClientSpy = createSpyObj('HttpClient', [
  'post',
  'get',
  'put',
  'delete',
]);
