async function commentFormHandler(e) {
    e.preventDefault();

    const commentText = document.querySelector('textarea[name="comment-body"]').value.trim();

    const postID = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if(commentText) {
        const res = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postID,
                commentText
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(res.ok){
            document.location.reload();
        } else {
            alert(res.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);