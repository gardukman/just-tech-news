async function addPostFormHandler(e) {
    e.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    
    const postContent = document.querySelector('textarea[name="post-content"]').value

    const res = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            postTitle,
            postContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(res.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit',addPostFormHandler);