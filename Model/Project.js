class Project {
  constructor(id, projectName, subProject, userId) {
    (this.id = id),
      (this.projectName = projectName),
      (this.subProject = subProject),
      (this.userId = userId);
  }
}
module.exports = {
  Project: Project
};
