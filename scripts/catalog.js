let cards = document.querySelectorAll('.card');
    // console.log(cards);
    for ( let card of cards) {
        card.onclick = function(event) {
        window.location.href = 'd1.html';
        };
    }   