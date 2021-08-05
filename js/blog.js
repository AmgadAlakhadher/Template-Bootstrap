posts = JSON.parse(localStorage.getItem('posts'));
//draw posts
let drawPostsList;
(drawPostsList = function (posts){
    let postsPosition = document.querySelector('.blog-position .posts');
    let postsList = posts.map((item) => {
        return`
        <div class="jumbotron py-4 px-3 blog-jumbotron">
            <div class="card">
                <div class="row no-gutters">
                <div class="col-lg-5 col-12">
                    <div class="blog-card-bg " style = "background: url(${item.urlImgPost});"></div>
                </div>
                <div class="col-lg-7  col-12">
                    <div class="card-body">
                    <h3 class="card-title">${item.titlePost}</h3>
                    <p class="card-text"><small class="text-muted">${item.datePost}</small></p>
                    <p class="card-text blog-card-text">
                        ${item.contentPost}
                    </p>
                    <button class="btn btn-warning card-btn" onclick="saveIdPost(${item.idPost})">قراءة المزيد</button>
                    </div> <!-- ./card-body -->
                </div> <!-- ./col -->
                </div> <!-- ./row -->
            </div> <!-- ./card -->
        </div> <!-- ./jumbotron -->
        `;
    });
    postsPosition.innerHTML += postsList.join("");
})(posts);
