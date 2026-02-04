const person = {
	species: 'Human',
	breathe() {
		return 'Breathing...'
	}

};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer'

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = []

manager.addTeamMember = function(name){
	this.team.push(name);
}


console.log(manager.department);
console.log(manager.team);
console.log(manager.company);
console.log(manager.position);
console.log(manager.species);
console.log(manager.breathe());

manager.addTeamMember('Alice');
manager.addTeamMember('Bob');
console.log(manager.team);

console.log(Object.getPrototypeOf(manager) == employee);
console.log(Object.getPrototypeOf(employee) == person);
console.log(Object.getPrototypeOf(person) == Object.prototype);



