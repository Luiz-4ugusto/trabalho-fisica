document.querySelectorAll('#navMenu .dropdown > a').forEach((dropdownLink) => {
    dropdownLink.addEventListener('click', (event) => {
        event.preventDefault();
        const dropdownContent = dropdownLink.nextElementSibling;
        dropdownContent.style.display =
            dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});
