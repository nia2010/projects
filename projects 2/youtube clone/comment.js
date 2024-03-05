let commentCount;

document.getElementById('mybtn').addEventListener('click', function(event) {
    event.preventDefault();


    const commentText = document.getElementById('com').value;


    if (commentText.trim() !== '') {
       
        commentCount = commentText;

        
        document.getElementById('demo').innerText = commentCount;

        
        console.log('Added comment:', commentText);
    }
});