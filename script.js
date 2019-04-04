document.addEventListener('DOMContentLoaded', function() {

    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square');
    let container = document.createElement('div');
    button.appendChild(buttonText);
    container.className = 'container';
    document.body.appendChild(button); 

    button.addEventListener('click', addSquare);
    
    let boxCount = 0;

    document.body.appendChild(container);

    function addSquare() {
        console.log("worked");

        let box = document.createElement('div');
        box.className = 'box';
        box.id = boxCount;
        box.innerText = boxCount++;
    
        container.appendChild(box);
        
    }; 
    
})