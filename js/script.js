document.getElementById('input_url').addEventListener('keyup', () => {
    let btnGerar = document.getElementById('gerar');
    btnGerar.className = 'btn btn-primary'
});

document.getElementById('gerar').addEventListener('click', () => {
    let url = document.getElementById('input_url').value;

    linkURL = document.getElementById('linkURL')
    linkURL.innerText = 'Seu link';
    linkURL.className = 'btn';
    linkURL.style.backgroundColor = '#00ff7f';
    linkURL.target = '_blank';
    linkURL.href = url;


    document.getElementById('qrcode').innerHTML = 
    '<img class="rounded" src="https://api.qrserver.com/v1/create-qr-code/?data=' + url + '&size=300x300" alt="" title="" />'
})
