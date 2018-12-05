class User {
  constructor(id, email, password, project) {
    (this.id = id),
      (this.email = email),
      (this.password = password),
      (this.project = project);
  }
}

module.exports = {
  User: User
};
