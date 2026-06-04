function handleForm(e)
{
    e.preventDefault();
    let name=document.querySelector("#name");
    let pass=document.querySelector("#pass");
    let repass=document.querySelector("#repass");
    let p= document.querySelector("#demo");
    if(name.value==="")
    {
        p.textContent="name should be required";
        setTimeout(()=>
        {
            p.textContent="";
        },2000)
        return;
    }
    if(pass!==repass)
    {
         p.textContent="password should be same";
        setTimeout(()=>
        {
            p.textContent="";
        },2000)
        return;
    }
}