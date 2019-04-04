document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square');
    let container = document.createElement('div');
    button.appendChild(buttonText);
    container.className = 'container';
    document.body.appendChild(button);
    document.body.appendChild(container);

    let boxCount = 0;

    button.addEventListener('click', addSquare);

    function addSquare() {
        let box = document.createElement('div');
        box.className = 'box';
        //box.innerText = boxCount++;

        container.appendChild(box);
    
        let boxText = boxCount;

        box.addEventListener('mouseover', appear);

        function appear() {
            box.appendChild(boxText);
        }

        box.addEventListener('mouseout', disappear);

        function disappear() {
            box.remove(boxText);
        }

    };



    




})