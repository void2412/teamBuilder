const employee = require('../lib/employee')

describe('Employee class test', () => {
	describe('Initialization', () => {
		it('should return an employee object containing name, id, email properties when called with "new" keyword',() => {
			const obj = new employee()

			expect("name" in obj).toEqual(true)
			expect("id" in obj).toEqual(true)
			expect("email" in obj).toEqual(true)
		})

		it('should set the properties when created with parameter in order "name, id, email"', () => {
			const obj = new employee('v',1,'a')
			expect(obj.name).toEqual('v')
			expect(obj.id).toEqual(1)
			expect(obj.email).toEqual('a')
		})

		it('should set default value for "name" and "email" to empty string, "id" to -1 if the argument is not given', ()=>{
			const obj = new employee()
			expect(obj.name).toEqual('')
			expect(obj.id).toEqual(-1)
			expect(obj.email).toEqual('')
		})
	})

	describe('Methods test', () => {
		it("should return appopriate property's value when call its method", ()=>{
			const obj = new employee('as', 3, 'xv')
			expect(obj.getName()).toEqual('as')
			expect(obj.getId()).toEqual(3)
			expect(obj.getEmail()).toEqual('xv')
			expect(obj.getRole()).toEqual('Employee')
		})
	})
})