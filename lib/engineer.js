const employee = require('employee')

class Engineer extends employee{
	constructor(name, id, email, github){
		this.github = github
		super(name, id, email)
	}

	getRole(){
		return 'Engineer'
	}
}