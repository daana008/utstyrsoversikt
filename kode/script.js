document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemImage = document.getElementById('item-image').files[0];

    if (itemName && itemImage) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const itemList = document.getElementById('item-list');
            const listItem = document.createElement('li');

            const img = document.createElement('img');
            img.src = event.target.result;

            const name = document.createElement('span');
            name.textContent = itemName;

            const status = document.createElement('button');
            status.textContent = 'Tilgjengelig';
            status.classList.add('status');
            status.addEventListener('click', function() {
                if (status.classList.contains('utleid')) {
                    status.textContent = 'Tilgjengelig';
                    status.classList.remove('utleid');
                } else {
                    status.textContent = 'Utleid';
                    status.classList.add('utleid');
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Slett';
            deleteBtn.addEventListener('click', function() {
                itemList.removeChild(listItem);
            });

            listItem.appendChild(img);
            listItem.appendChild(name);
            listItem.appendChild(status);
            listItem.appendChild(deleteBtn);

            itemList.appendChild(listItem);

            document.getElementById('item-name').value = '';
            document.getElementById('item-image').value = '';
        };
        reader.readAsDataURL(itemImage);
    }
});