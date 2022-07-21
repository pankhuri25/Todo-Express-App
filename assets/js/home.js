// For creating a button action
var tasks = document.getElementsByClassName('task');

// To apply strike-through effect to text when checkbox is toggled
for(let i of tasks){
    i.getElementsByTagName('input')[0].addEventListener('change', function() {
        if (this.checked) {
          i.getElementsByTagName('p')[0].style.textDecoration = 'line-through';
          i.getElementsByTagName('span')[0].style.textDecoration = 'line-through';
        } else {
            i.getElementsByTagName('p')[0].style.textDecoration = 'none';
            i.getElementsByTagName('span')[0].style.textDecoration = 'none';
        }
    });
}