let name=document.querySelector(".emp_name");
let id=document.querySelector(".emp_id");
let salary=document.querySelector(".sal");
let department=document.querySelector(".dept");
let tableBody=document.querySelector("tbody");
function addEmployee(e)
{
    e.preventDefault();
    if(name.value==="" || id.value==="" || department.value==="" || salary.value==="")
    {
        alert("fill all the fields");
        return;
    }
    let row=`
        <tr>
            <td>${name.value}</td>
            <td>${id.value}</td>
            <td>${department.value}</td>
            <td>${salary.value}</td>
             <td>
                <button class="delete" onClick="deleteRow(this)">Delete</button>
             </td>
        </tr>
    `;
    tableBody.innerHTML+=row;
    name.value="";
    id.value="";
    department.value="";
    salary.value="";
}
function deleteRow(button)
    {
        button.parentElement.parentElement.remove();
    }