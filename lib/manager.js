const employee = require('./employee')

class Manager extends employee {
	constructor(name='', id=-1, email='', officeNumber=''){
		super(name, id, email)
		this.officeNumber = officeNumber
	}

	getRole(){
		return 'Manager'
	}
}
