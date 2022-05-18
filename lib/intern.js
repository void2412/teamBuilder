const employee = require('employee')

class Intern extends employee{
	constructor(name='', id=-1, email='', school=''){
		this.school = school
		super(name, id, email)
	}

	getRole(){
		return 'Intern'
	}
}