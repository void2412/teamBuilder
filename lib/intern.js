const employee = require('employee')

class Intern extends employee{
	constructor(name, id, email, school){
		this.school = school
		super(name, id, email)
	}

	getRole(){
		return 'Intern'
	}
}