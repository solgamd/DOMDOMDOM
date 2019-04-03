document.addEventListener('DOMContentLoaded', function() {

    const button = document.createElement('button');
    const buttonText = document.createTextNode('Add Square');
    const container = document.createElement('container');
    button.appendChild(buttonText);
    container.appendChild(button);
    document.body.appendChild(container);
    container.className = 'container';

    button.addEventListener('click', addSquare);

    function addSquare() {
        let div = document.createElement('div');
        container.appendChild(div);
        document.body.appendChild(container);

        div.className = 'square';
        let squares = document.getElementsByClassName('square');
        div.id = squares.length - 1;
    };
    
})