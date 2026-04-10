let btn = document.getElementById('submit_btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let password = document.getElementById('password').value;
    let basse64 = btoa(password);
    localStorage.setItem('password', basse64)


    let senha = atob(localStorage.getItem('password'));

    document.getElementById('result').textContent = senha;
});
