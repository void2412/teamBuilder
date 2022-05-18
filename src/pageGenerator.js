function renderlastColumn(employee){
	switch(employee.getRole()){
		case "Manager": return `<li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>`;break;
		case "Engineer": return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`; break;
		case "Intern": return `<li class="list-group-item">School: ${employee.getSchool()}</li>`; break;
		case "Employee": return ``; break;
	}
}

function generateCard(employee){
	return `
		<div class="col-12 col-md-6 col-xl-3">
			<div class="card p-0">
				<div class="card-header bg-primary text-light text-center p-3">
					<h2>${employee.getName()}</h2>
					<h3>${employee.getRole()}</h3>
				</div>

				<div class="card-body my-5">
					<ul class="list-group ">
						<li class="list-group-item">ID: ${employee.getId()}</li>
						<li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
						${renderlastColumn(employee)}
					</ul>
				</div>
			</div>
		</div>
		`
}

function generatePage(employeeList){
	var cards =``
	
	employeeList.forEach((employee) => {
		cards += generateCard(employee)
	})
	
	var resultData = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${employeeList[0].getName()}'s Team</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body class="container-fluid">
	<header class="bg-danger p-4 text-center mb-4">
		<h1>${employeeList[0].getName()}'s Team</h1>
	</header>

	<main class = "row d-flex justify-content-center flex-wrap g-5">
		${cards}		
	</main>
	
</body>
</html>
	`
	console.log(resultData)
	return resultData

}

module.exports = generatePage