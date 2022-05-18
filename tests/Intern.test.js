const intern = require('../lib/intern')

describe('Intern class test', () => {
	describe('Initialization', () => {
		it('should return an intern object containing name, id, email, school properties when called with "new" keyword',() => {
			const obj = new intern()

			expect("name" in obj).toEqual(true)
			expect("id" in obj).toEqual(true)
			expect("email" in obj).toEqual(true)
			expect("school" in obj).toEqual(true)

		})

		it('should set the properties when created with parameter in order "name, id, email, school"', () => {
			const obj = new intern('v',1,'a', 'adelaide')
			expect(obj.name).toEqual('v')
			expect(obj.id).toEqual(1)
			expect(obj.email).toEqual('a')
			expect(obj.school).toEqual('adelaide')
		})

		it('should set default value for "name", "school" and "email" to empty string, "id" to -1 if the argument is not given', ()=>{
			const obj = new intern()
			expect(obj.name).toEqual('')
			expect(obj.id).toEqual(-1)
			expect(obj.email).toEqual('')
			expect(obj.school).toEqual('')
		})
	})

	describe('Methods test', () => {
		it("should return appopriate property's value when call its method", ()=>{
			const obj = new intern('as', 3, 'xv', 'adelaide')
			expect(obj.getName()).toEqual('as')
			expect(obj.getId()).toEqual(3)
			expect(obj.getEmail()).toEqual('xv')
			expect(obj.getSchool()).toEqual('adelaide')
			expect(obj.getRole()).toEqual('Intern')
		})
	})
})