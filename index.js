const engineer = require('./lib/engineer')
const intern =  require('./lib/intern')
const manager = require('./lib/manager')
const generatePage = require('./src/pageGenerator')
const  inquirer = require('inquirer')
const fs = require('fs')

async function getEmployeeList(){
	var employeeList = []
	var managerDetails = await getManagerDetails()
	employeeList.push(new manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber))

	var choice = await getAddMemberChoice()
	while(choice !== false){
		let employeeDetails ={}
		switch(choice){
			case 'Engineer': employeeDetails = await getEngineerDetails();
			employeeList.push(new engineer(employeeDetails.name, employeeDetails.id, employeeDetails.email, employeeDetails.github))
			break;
			case 'Intern': employeeDetails = await getInternDetails();
			employeeList.push(new intern(employeeDetails.name, employeeDetails.id, employeeDetails.email, employeeDetails.school))
			break;
		}
		choice = await getAddMemberChoice()
	}

	return employeeList
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
	var result = await inquirer.prompt({
		name:'memberChoice',
		type:'list',
		choices:['Engineer', 'Intern', 'Finish adding member'],
		message: 'Which type of team member would you like to add?'
	})

	if (result.memberChoice == 'Finish adding member')
		return false
	
	return result.memberChoice
}

async function getHTMLfileName(){
	var result = await inquirer.prompt({
		name:'filename',
		type:'input',
		message: 'What is the filename of the HTML file?',
		default: 'index'
	})

	var filename = result.filename
	if (filename.substring((filename.length - 5),filename.length) !== '.html')
		filename = `${filename}.html`

	return filename
}

async function init(){
	var employeeList = await getEmployeeList()
	var filename = await getHTMLfileName()
	var data = generatePage(employeeList)

	fs.writeFile(`./dist/${filename}`, data, err => err ? console.error(err) : console.log('Successfully created html'))
}

init()