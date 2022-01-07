const append = document.getElementById('append');
const form = document.getElementById('form');
const input = document.getElementById('input');
const grid = document.getElementById('grid');
const col = document.querySelector('.col')


form.addEventListener('submit', (wow)=>{
wow.preventDefault();

addProject();
})

function addProject(){
    
    if(grid){
        const projectElement =  $(grid).append(`<div class ='col-md-3'><div id ='newProject'></div></div>`)
    }
    
}

function projectName(){
    const projectName = input.value;

}





addProject();



