document.getElementById("heading").innerHTML="Nationalize API";

document.getElementById("name").addEventListener("click",getName);


async function getName() {
 
    let url = 'https://api.nationalize.io/?name=sathish';
        try {
            let res = await fetch(url);
            let Json= await res.json();
            console.log(Json);
            return Json;
        } catch (error) {
            console.log(error);
        }
    }

 async function renderUsers() {
        let users = await getName();
        let html = '';
        users.array.forEach(element => {
            let htmlSegment = `<div class="user">
            <h2>${element.name}</h2>
             </div>`;

            html += htmlSegment;
        });
    
        let list = document.querySelector("ul-list");
        list.innerHTML=html;
    }
    
    renderUsers();