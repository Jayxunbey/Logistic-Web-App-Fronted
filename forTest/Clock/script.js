document.getElementById('dateTimeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani yuborishni to'xtatadi

    // Formadagi qiymatlarni olish
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Natijani ko'rsatish
    alert(`Selected Date: ${date}\nSelected Time: ${time}`);
});
