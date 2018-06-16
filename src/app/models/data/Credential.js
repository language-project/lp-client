import Record from '@models/Record';

export default class Credential extends Record({
  email: '',
}) {
  constructor(data) {
    super(data);
  }
  
  static of(data) {
    if (data && data.user) {
      return new Credential({
        email: data.user.user.email,
      })
    }
  }
};
