export default class User {
  constructor(id, type, userId, userInfoInString, isActive) {
    this.id = id;
    this.type = type;
    this.userId = userId;
    this.userInfoInString = userInfoInString;
    this.isActive = isActive;
  }
}