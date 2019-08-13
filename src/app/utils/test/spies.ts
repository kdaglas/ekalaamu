const createSpyObj = (name: string, methods: string[]) => {
  // @ts-ignore
  return jasmine.createSpyObj(name, methods);
}

export const authServiceSpy = createSpyObj('AuthService', [
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
