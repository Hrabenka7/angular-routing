

export class AuthSService {
  isLogged = false;

  authenticate() {
    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged);
      }, 800);
    });
    return promise;
  }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
