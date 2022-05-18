const engineer = require('./lib/engineer')
const intern =  require('./lib/intern')
const manager = require('./lib/manager')
const generatePage = require('./src/pageGenerator')
const  inquirer = require('inquirer')

async function getEmployeeList(){
	var employeeList = []

}

async function getManagerDetails(){
	var result = await inquirer.prompt([{
		name:'name',
		type:'input',
		message: `What is the team manager's name?`	
	},
	{
		name:'id',
		type:'input',
		message: `What is the team manager's id?`	
	},
	{
		name:'email',
		type:'input',
		message: `What is the team manager's email?`	
	},
	{
		name:'officeNumber',
		type:'input',
		message: `What is the team manager's office number?`	
	}
])
	return result
}

async function getEngineerDetails(){

}

async function getInternDetails(){

}

async function getAddMemberChoice(){

}

getManagerDetails()