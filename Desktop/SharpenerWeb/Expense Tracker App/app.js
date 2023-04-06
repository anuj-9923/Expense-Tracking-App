var add_todo_btn = document.getElementById('add-btn');
var todo_input = document.getElementById('todo-input');
var list = document.getElementById('list');

add_todo_btn.addEventListener('click', addDetails);

function addDetails(e) {
    e.preventDefault();
    var todo = document.getElementById('todo-input').value + '-' +
        document.getElementById('input-description').value + '-' +
        document.getElementById('input-category').value;
    var item = document.createElement('DIV');
    item.classList.add('item');
    localStorage.setItem(document.getElementById('todo-input').value, todo);

    var item_text = document.createElement('DIV');
    item_text.classList.add('item-text');
    item_text.textContent = todo;

    var edit_input = document.createElement('INPUT');
    edit_input.classList.add('edit-input');
    edit_input.classList.add('hide');
    edit_input.name = 'edit-input';
    edit_input.type = 'text';
    edit_input.value = todo;

    var edit_input_btn = document.createElement('BUTTON');

    var action_btns = document.createElement('DIV');
    action_btns.classList.add('action-btns');

    var edit_btn = document.createElement('BUTTON');
    edit_btn.classList.add('action-btn');
    edit_btn.classList.add('edit-btn');
    edit_btn.textContent = 'Edit Expense';

    //Edit 

    edit_btn.addEventListener('click', function () {
        edit_input.classList.remove('hide');
        item_text.classList.add('hide');
    });

    var remove_btn = document.createElement('BUTTON');
    remove_btn.classList.add('action-btn');
    remove_btn.classList.add('remove-btn');
    remove_btn.textContent = 'REMOVE';

    //Remove
    remove_btn.addEventListener('click', function () {
        var rm = document.getElementById('todo-input');
        localStorage.removeItem(rm, todo);
        item.parentNode.removeChild(item);

    });

    //action_btns.append(edit_input_btn);
    action_btns.append(edit_btn);
    action_btns.append(remove_btn);
    item.append(item_text);
    // item.append(edit_input);
    item.append(action_btns);
    list.append(item);

}