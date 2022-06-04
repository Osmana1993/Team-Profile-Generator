const inquirer = require('inquirer');
const fs = require('fs');

// ------------- Classes ---------------------

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// ---------------- Variables -----------------

const beginHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
  <style>
  header h1{
    text-align: center;
    margin: 20px;
    padding: 30px ;
    background-color: red;
    color: aliceblue;
}
.container{
    display:flex;
    justify-content: center;
    margin: 30px;
    flex-wrap: wrap;
    justify-content:space-between;
}
.card{
    padding:20px;
}
.card-header{
    background-color:blue;
    color:white;
}


}
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <div class="container">`;

const endHTML = `\n  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</body>
</html>`;

//  ------------------ Functions ----------------------

// Gets inputs from command line for Manager information
const promptManager = () => {
  console.log('Team Profile Generator\n');
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please, enter Manager\'s name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
    {
      type: 'input',
      name: 'office',
      message: 'Office #:',
    },
    {
      type: 'confirm',
      name: 'moreMembers',
      message: 'Would you like to add more team members?',
    }
  ]);
}
// Gets inputs from command line for Engineer or Intern information
const promptMember = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Team member name:',
    },
    {
      type: 'rawlist',
      name: 'role',
      message: 'Select the member\'s role:',
      choices: ['Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
  ]);
}

// Append a team member card in HTML
function appendMemberCard(member) {
  const name = member.getName();
  const role = member.getRole();
  const id = member.getId();
  const email = member.getEmail();
  let card = '';
  switch (role) {
    case 'Manager': {
      const office = member.getOfficeNumber();
      card = `\n    <div class="card shadow bg-blue rounded">
            <div class="card-header" id="mang">
              <h3>${name}</h3>
              <h4> ${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office #: ${office}</li>
              </ul>
            </div>
          </div>`;
      break;
    }
    case 'Engineer': {
      const github = member.getGithub();
      card = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header" id="role">
              <h3>${name}</h3>
              <h4> ${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${github}">${github}</a></li>
              </ul>
            </div>
          </div>`;
      break;
    }
    case 'Intern': {
      const school = member.getSchool();
      card = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header" id="third">
              <h3>${name}</h3>
              <h4>🎓 ${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
              </ul>
            </div>
          </div>`;
      break;
    }
    default:
      card = '';
      break;
  }
  console.log(`Adding team member: ${role}`);
  fs.appendFileSync('./dist/index.html', card);
}

// Get an employee info from command line and create index.html
function addMember() {
  promptMember()
    .then(function ({ name, role, id, email }) {
      let roleQuestion = '';
      if (role === 'Engineer') {
          roleQuestion = 'GitHub username:';
      } else {
          roleQuestion = 'school name:';
      }
      // console.log(role);
      inquirer.prompt([
        {
          type: 'input',
          name: 'roleDependent',
          message: `${role}'s ${roleQuestion}`,
        },
        {
          type: 'confirm',
          name: 'moreMembers',
          message: 'Would you like to add more team members?',
        }])
        .then(function ({ roleDependent, moreMembers }) {
          let newMember;
          if (role === 'Engineer') {
              newMember = new Engineer(name, id, email, roleDependent);
          } else {
              newMember = new Intern(name, id, email, roleDependent);
          }
          appendMemberCard(newMember);
          if (moreMembers) {
            addMember();  // if moreMember added call this.function itself
          } else {
            fs.appendFileSync('./dist/index.html', endHTML);
          }
        });
    });
}



// a function to initialize app 
function init() {
  promptManager()  // Starts with getting Manager's info
    .then(function ({ name, id, email, office, moreMembers}) {
      let newMember = new Manager(name, id, email, office);
      fs.writeFileSync('./dist/index.html', beginHTML);
      appendMemberCard(newMember);
      if (moreMembers) {
        addMember();
      } else {
        fs.appendFileSync('./dist/index.html', endHTML);
      }
    });
}

// Function call to initialize app
init();