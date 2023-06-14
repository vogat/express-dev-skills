const skills = [
    {id: 718364, skill: 'HTML', years: '2'},
    {id: 318364, skill: 'Javascript', years: '4'},
    {id: 918364, skill: 'Node', years: '1'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(id) {
    id = parseInt(id);
    //Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }