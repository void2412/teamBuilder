const employee = require('./employee')

class Engineer extends employee{
	constructor(name='', id=-1, email='', github=''){
		super(name, id, email)
		this.github = github
	}

	getGithub(){
		return this.github
	}

	getRole(){
		return 'Engineer'
	}
}

module.exports = Engineer