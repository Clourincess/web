function load_more() {
    for(i = 0; i < 10; i++){
        card = document.createElement('div');
        im = document.createElement('img');
        im.src = "media\\chair.png";
        p = document.createElement('p');
        p.innerHTML = 'The Dandy chair';
        p2 = document.createElement('p2');
        p2.innerHTML = '£250';
        card.append(im);
        card.append(p);
        card.append(p2);
        document.getElementById('cards').append(card);
    }
}