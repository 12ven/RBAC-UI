// script.js

let users = [];
let roles = [];
let userId = 1;
let roleId = 1;

function addUser() {
    const username = prompt("Enter username:");
    const role = prompt("Enter role:");
    const status = prompt("Enter status (Active/Inactive):");
    
    users.push({ id: userId++, username, role, status });
    console.log('User added:', users[users.length - 1]);
    renderUsers();
}

function editUser(id) {
    const user = users.find(user => user.id === id);
    user.username = prompt("Enter new username:", user.username);
    user.role = prompt("Enter new role:", user.role);
    user.status = prompt("Enter new status (Active/Inactive):", user.status);
    renderUsers();
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers();
}

function addRole() {
    const roleName = prompt("Enter role name:");
    const permissions = prompt("Enter permissions (comma separated):");
    
    roles.push({ id: roleId++, roleName, permissions: permissions.split(",") });
    console.log('Role added:', roles[roles.length - 1]);
    renderRoles();
}

function editRole(id) {
    const role = roles.find(role => role.id === id);
    role.roleName = prompt("Enter new role name:", role.roleName);
    role.permissions = prompt("Enter new permissions (comma separated):", role.permissions.join(",")).split(",");
    renderRoles();
}

function deleteRole(id) {
    roles = roles.filter(role => role.id !== id);
    renderRoles();
}

function renderUsers() {
    const userTable = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    userTable.innerHTML = "";
    users.forEach((user, index) => {
        const row = userTable.insertRow();
        row.insertCell(0).innerText = index + 1; // Display sequential number
        row.insertCell(1).innerText = user.username;
        row.insertCell(2).innerText = user.role;
        row.insertCell(3).innerText = user.status;
        const permissions = getUserPermissions(user.role);
        row.insertCell(4).innerHTML = permissions.join(", ");
        row.insertCell(5).innerHTML = `<button onclick="editUser(${user.id})">Edit</button> <button onclick="deleteUser(${user.id})">Delete</button>`;
    });
}

function renderRoles() {
    const roleTable = document.getElementById("role-table").getElementsByTagName('tbody')[0];
    roleTable.innerHTML = "";
    roles.forEach((role, index) => {
        const row = roleTable.insertRow();
        row.insertCell(0).innerText = index + 1; // Display sequential number
        row.insertCell(1).innerText = role.roleName;
        row.insertCell(2).innerText = role.permissions.join(", ");
        row.insertCell(3).innerHTML = `<button onclick="editRole(${role.id})">Edit</button> <button onclick="deleteRole(${role.id})">Delete</button>`;
    });
}

function getUserPermissions(roleName) {
    const role = roles.find(role => role.roleName === roleName);
    return role ? role.permissions : [];
}



// Add a function to get permissions of a user based on their role
function getUserPermissions(roleName) {
    const role = roles.find(role => role.roleName === roleName);
    return role ? role.permissions : [];
}

// Update renderUsers function to display user permissions
function renderUsers() {
    const userTable = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    userTable.innerHTML = "";
    users.forEach(user => {
        const row = userTable.insertRow();
        row.insertCell(0).innerText = user.id;
        row.insertCell(1).innerText = user.username;
        row.insertCell(2).innerText = user.role;
        row.insertCell(3).innerText = user.status;
        const permissions = getUserPermissions(user.role);
        row.insertCell(4).innerHTML = permissions.join(", ");
        row.insertCell(5).innerHTML = `<button onclick="editUser(${user.id})">Edit</button> <button onclick="deleteUser(${user.id})">Delete</button>`;
    });
}



// Initial render
renderUsers();
renderRoles();
