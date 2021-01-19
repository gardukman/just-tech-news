const { response } = require("express");

async function deleteFormHandler(e) {
    e.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })

    if (res.ok) document.location.replace('/dashboard');
    else alert(response.statusTest);
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);