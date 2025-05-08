function setStarValues(num) {
    //let ratings = document.getElementById(`rating`);
    //console.log(ratings);
    let ratingText = num;
    for (let rate in ratingText) {
        let fomat = document.querySelector(`.search-container .col-right .search-item .right-item-content .a-row .star-box .star-outer .star-inner`);
        //console.log(fomat);
        fomat.style.width = rate*20 +'%';
    }
}

function getRatingData() {

}