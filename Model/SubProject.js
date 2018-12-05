class SubProject {
  constructor(id, SubProjectName, DetailList, ProjectId) {
    (this.id = id),
      (this.SubProjectName = SubProjectName),
      (this.DetailList = DetailList),
      (this.ProjectId = ProjectId);
  }
}
module.exports = {
  SubProject: SubProject
};
