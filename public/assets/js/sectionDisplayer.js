document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-90');
        document.querySelectorAll('.faq-content').forEach(item => {
            if (item !== content && !item.classList.contains('hidden')) {
                item.classList.add('hidden');
                item.previousElementSibling.querySelector('i').classList.remove('rotate-90');
            }
        });
    });
});