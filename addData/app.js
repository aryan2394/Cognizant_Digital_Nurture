let name=document.querySelector("#name");
let id=document.querySelector("#id");
let dept=document.querySelector("#dept");
let sal=document.querySelector("#sal");
let tbody=document.querySelector("tbody");
function addEmp(e)
{
    e.preventDefault();
    if(name.value==="" || id.value==="")
    {
        alert("all fields are required");
        return;
    }
    let row=`
        <tr>
            <td>${name.value}</td>
            <td>${id.value}</td>
            <td>${dept.value}</td>
            <td>${sal.value}</td>
            <td><button class="delete" onClick="deleteRow(this)">Delete</button></td>
        </tr>
    `;
    tbody.innerHTML+=row;
    name.value="";
    id.value="";
    dept.value="";
    sal.value="";
}
function deleteRow(btn)
{
    btn.parentElement.parentElement.remove();
}
