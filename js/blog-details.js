//varebals
let id = localStorage.getItem('idPost');
let posts = JSON.parse(localStorage.getItem('posts'));
let post;
post = posts.find((item) => item.idPost == id);
console.log(post);

//draw post

let drawPost;
(drawPost = function (post){
    let postPosition = document.querySelector('.post-details');
    let post_details = 
        `
        <div class="card w-100 mb-3">
            <div class="blog-details-card-bg m-3" style ="background-image: url(${post.urlImgPost});"></div>
            <div class="card-body">
                <h3 class="card-title">${post.titlePost}</h3>
                <p class="card-text"><small class="text-muted">${post.datePost}</small></p>
                <p class="card-text">
                    ${post.contentPost}
                </p>
            </div> <!-- ./card-body -->
        </div> <!-- ./card -->
        `;
    postPosition.innerHTML = post_details;
})(post);
