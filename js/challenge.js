document.addEventListener("DOMContentLoaded", () => {
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const counterElement = document.getElementById("counter");
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');

    let counter = 0;
    let intervalId = setInterval(updateCounter, 1000);
    let isPaused = false;

    function updateCounter() {
        counter++;
        counterElement.textContent = counter;
    };
    heartButton.addEventListener("click",() => {
        alert(`you liked ${counter}`);
    });
    plusButton.addEventListener("click",() => {
        counter++;
        counterElement.textContent = counter;
    });
    minusButton.addEventListener("click", () => {
        counter--;
        counterElement.textContent = counter;
    });
    pauseButton.addEventListener("click", () => {
        if (isPaused) {
            intervalId = setInterval(updateCounter, 1000);
            pauseButton.textContent = "pause";
        } else {
            clearInterval(intervalId);
            pauseButton.textContent = "resume";
        }
        isPaused = !isPaused;
    });
    commentForm.addEventListener('submit',function(event){
        event.preventDefault();
        const newComment = commentInput.value;
        if(newComment){
            const commentDiv = document.createElement('div');
            commentDiv.textContent = newComment;
            commentList.appendChild(commentDiv);
            commentInput.value='';
        }
    })
    
});
