const engineer = require('../lib/engineer')

describe('Engineer class test',()=>{
	describe('Initialization', () =>{
		it('should return an engineer object containing name, id, email, github properties when called with "new" keyword',() => {
			const obj = new engineer()

			expect("name" in obj).toEqual(true)
			expect("id" in obj).toEqual(true)
			expect("email" in obj).toEqual(true)
			expect("github" in obj).toEqual(true)
		})

		it('should set the properties when created with parameter in order "name, id, email, github"', () => {
			const obj = new engineer('v',1,'a','void')
			expect(obj.name).toEqual('v')
			expect(obj.id).toEqual(1)
			expect(obj.email).toEqual('a')
			expect(obj.github).toEqual('void')
		})

		it('should set default value for "name", "github" and "email" to empty string, "id" to -1 if the argument is not given', ()=>{
			const obj = new engineer()
			expect(obj.name).toEqual('')
			expect(obj.id).toEqual(-1)
			expect(obj.email).toEqual('')
			expect(obj.github).toEqual('')
		})
	})

	describe('Methods test', () => {
		it("should return appopriate property's value when call its method", ()=>{
			const obj = new engineer('as', 3, 'xv','asd')
			expect(obj.getName()).toEqual('as')
			expect(obj.getId()).toEqual(3)
			expect(obj.getEmail()).toEqual('xv')
			expect(obj.getGithub()).toEqual('asd')
			expect(obj.getRole()).toEqual('Engineer')
		})
	})
})