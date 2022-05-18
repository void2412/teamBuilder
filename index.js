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
	var result = await inquirer.prompt([{
		name:'name',
		type:'input',
		message: `What is the engineer's name?`	
	},
	{
		name:'id',
		type:'input',
		message: `What is the engineer's id?`	
	},
	{
		name:'email',
		type:'input',
		message: `What is the engineer's email?`	
	},
	{
		name:'github',
		type:'input',
		message: `What is the engineer's Github username?`	
	}
])
	return result
}

async function getInternDetails(){
	var result = await inquirer.prompt([{
		name:'name',
		type:'input',
		message: `What is the intern's name?`	
	},
	{
		name:'id',
		type:'input',
		message: `What is the intern's id?`	
	},
	{
		name:'email',
		type:'input',
		message: `What is the intern's email?`	
	},
	{
		name:'school',
		type:'input',
		message: `What is the intern's school?`	
	}
])
	return result
}

async function getAddMemberChoice(){
	var result = await inquirer.prompt([{
		name:'memberChoice',
		type:'list',
		choice:['Engineer', 'Intern', 'Finish adding member'],
		message: 'Which type of team member would you like to add?'
	}])

	if (result.memberChoice == 'Finish adding member')
		return false
	
	return result
}

getManagerDetails()