const employee = require('employee')

class Engineer extends employee{
	constructor(name='', id=-1, email='', github=''){
		this.github = github
		super(name, id, email)
	}

	getRole(){
		return 'Engineer'
	}
}