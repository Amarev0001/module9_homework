(function () {
    const root = document.createElement('div');
    const wrapper = document.createElement('div');
    const inputEl1 = document.createElement('input');
    const inputEl2 = document.createElement('input');
    const submitButton = document.createElement('button');
    const resultEl = document.createElement('div');
    const messageEl = document.createElement('p');

    root.setAttribute('id','root');

    wrapper.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; margin: 0 auto; height: 200px; width: 500px;');

    inputEl1.placeholder = 'введите число от 100 до 300';
    inputEl1.setAttribute('style','margin: 15px');
    inputEl1.setAttribute('id','first');

    inputEl2.placeholder = 'введите число от 100 до 300';
    inputEl2.setAttribute('style','margin: 15px');
    inputEl2.setAttribute('id','second');

    submitButton.innerText = 'Submit';
    submitButton.setAttribute('style','width: 65px');
    submitButton.onclick = showImg;

    resultEl.setAttribute('id','gallery');
    resultEl.setAttribute('style','display: flex; flex-wrap: wrap; justify-content: center;margin: 50px auto;');

    wrapper.appendChild(inputEl1);
    wrapper.appendChild(inputEl2);
    wrapper.appendChild(submitButton);
    wrapper.appendChild(messageEl);

    document.querySelector('body').appendChild(root);
    document.querySelector('#root').appendChild(wrapper);
    document.querySelector('body').appendChild(resultEl);

})()

function renderImg (rootEl, url) {
    const img = document.createElement('img');
    img.src = url;
    img.setAttribute('style', 'margin: 5px;');
    rootEl.appendChild(img);
}

function sendRequest(url){
    return fetch(url).then((response)=>{return response});
}

function showImg() {

    const firstInputValue = Number(document.querySelector('#first').value);
    const secondInputVale = Number(document.querySelector('#second').value);
    const galleryEl = document.querySelector('#gallery');
    const messageEl = document.querySelector('#root p');

    if(firstInputValue>=100&&firstInputValue<=300&&secondInputVale>=100&&secondInputVale<=300){
        messageEl.innerHTML = '';
        const url = `https://picsum.photos/${firstInputValue}/${secondInputVale}`;
        const promise = sendRequest(url);
        promise.then((response)=>{
            renderImg(galleryEl,response.url);
        }).catch(()=>{
            console.log('error');
        })
    }else {
        messageEl.innerHTML = '«одно из чисел вне диапазона от 100 до 300»';
    }
}