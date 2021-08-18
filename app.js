
var commentArr = [];

function createComment(img, mail, comment) {
    var commentDiv = document.createElement('div');
    commentDiv.setAttribute('data_id', Math.floor(Math.random() * 100) + 1);
    commentDiv.setAttribute('class',"to-be-deleted")
    var img = document.createElement('img');
    img.src = 'https://avatarfiles.alphacoders.com/979/thumb-97920.png';
    var mail = document.createElement('h2');
    mail.innerText = "d.d@yahoo.com";
    var comment = document.createElement('p');
    comment.innerText = document.getElementById('com').value;
    var btnDel = document.createElement('button');
    btnDel.innerHTML = "Delete";

    commentDiv.appendChild(img);
    commentDiv.appendChild(mail);
    commentDiv.appendChild(comment);
    commentDiv.appendChild(btnDel);

    return commentDiv;
}



var btn = document.getElementById('add');

var inputComment = document.getElementById('com');

btn.addEventListener('click', function (event) {

    var commentList = document.querySelector('.commentList');
    var commentDiv = createComment()
    commentList.appendChild(commentDiv);

    for (index = 0; index < commentArr.length; index++) {
        commentDiv = commentList[index];
    }

    commentArr.push(createComment());

});