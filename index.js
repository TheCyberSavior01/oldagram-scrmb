const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21,235"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: "4,095"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: "1,52,023"
    }
]

const mainBodyEl = document.getElementById("main-body")

for (let i = 0; i < posts.length; i++) {
    let content =  `
        <section>
            <div class="user-info">
                <img src=${posts[i].avatar} alt="avatar of vangogh" class="user-avatar" >
                <div class="user-details">
                    <h4>${posts[i].name}</h4>
                    <p>${posts[i].location}</p>
                </div>
            </div>
        <div class="container">
            <img src=${posts[i].post} alt="post of vangogh" class="post-img">
        </div>
            <div class="body">
                <div class="icons">
                    <img src="images/icon-heart.png" class="icon">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                <p class="like-count">${posts[i].likes} likes</p>
                <p class="comment"><span class="commenter">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        <div class="blank-space"></div>
        </section>
    `

    mainBodyEl.innerHTML += content
    
}