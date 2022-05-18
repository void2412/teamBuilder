const employee = require('./employee')

class Manager extends employee {
	constructor(name='', id=-1, email='', officeNumber=-1){
		super(name, id, email)
		this.officeNumber = officeNumber
	}

	getOfficeNumber(){
		return this.officeNumber
	}

	getRole(){
		return 'Manager'
	}
}

module.exports = Manager