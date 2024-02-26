const skills = [
  { skill: "Javascript", done: true },
  { skill: "CSS", done: true },
  { skill: "HTML", done: true },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function update(id, updatedSkill) {
  skills[id] = skill;
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}

function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}
