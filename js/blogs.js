
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery_btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Show all items if 'all' is selected
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-service') === filterValue) {
                    item.style.display = 'block'; // Show the item
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        });
    });
});

