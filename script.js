function rotateList() {
    const listInput = document.getElementById('list').value;
    const rotationInput = document.getElementById('rotation').value.trim();

    if (!listInput || !rotationInput || isNaN(rotationInput)) {
        alert('Please enter valid input.');
        return;
    }

    const list = listInput.split(',').map(item => parseInt(item.trim()));
    const rotation = parseInt(rotationInput);
    const rotatedList = rotateListFunc(list, rotation);
    
    document.getElementById('result').textContent = 'Rotated List: ' + rotatedList.join(', ');
}

function rotateListFunc(lst, d) {
    const length = lst.length;
    d = d % length; // Ensure d is within the range of the list length

    if (d === 0) {
        return lst; // No rotation needed
    }

    // Reverse the first part manually
    for (let i = 0, j = length - d - 1; i < j; i++, j--) {
        const temp = lst[i];
        lst[i] = lst[j];
        lst[j] = temp;
    }
    
    const firstPart = lst.slice(length - d);
    const secondPart = lst.slice(0, length - d);
    return firstPart.concat(secondPart);
}
