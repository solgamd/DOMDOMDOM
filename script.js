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
        

        container.appendChild(box);
        
        let boxText = document.createTextNode(boxCount);
        boxText.id = 'boxCount';
        boxText = boxCount++;
        
        box.addEventListener('mouseover', function() {
            box.append(boxText);
            
        });
// NEED TO MAKE TEXT INSIDE BOX DISAPPEAR
        box.addEventListener('mouseout', function() {
            document.getElementById('box').parentNode.removeChild(document.getElementById('boxCount'))
            // var off = document.getElementById('boxCount');
            // return off.parentNode.removeChild(off);
            // //document.getElementById('boxCount').innerText = '';
        });

    };



    




})