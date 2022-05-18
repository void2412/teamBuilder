const manager = require('../lib/manager')

describe('Manager class test', () => {
	describe('Initialization', () => {
		it('should return an manager object containing name, id, email, officeNumber properties when called with "new" keyword',() => {
			const obj = new manager()

			expect("name" in obj).toEqual(true)
			expect("id" in obj).toEqual(true)
			expect("email" in obj).toEqual(true)
			expect("officeNumber" in obj).toEqual(true)

		})

		it('should set the properties when created with parameter in order "name, id, email, officeNumber"', () => {
			const obj = new manager('v',1,'a', 111)
			expect(obj.name).toEqual('v')
			expect(obj.id).toEqual(1)
			expect(obj.email).toEqual('a')
			expect(obj.officeNumber).toEqual(111)
		})

		it('should set default value for "name" and "email" to empty string, "id" and "officeNumber" to -1 if the argument is not given', ()=>{
			const obj = new manager()
			expect(obj.name).toEqual('')
			expect(obj.id).toEqual(-1)
			expect(obj.email).toEqual('')
			expect(obj.officeNumber).toEqual(-1)
		})
	})

	describe('Methods test', () => {
		it("should return appopriate property's value when call its method", ()=>{
			const obj = new manager('as', 3, 'xv', 234)
			expect(obj.getName()).toEqual('as')
			expect(obj.getId()).toEqual(3)
			expect(obj.getEmail()).toEqual('xv')
			expect(obj.getOfficeNumber()).toEqual(234)
			expect(obj.getRole()).toEqual('Manager')
		})
	})
})