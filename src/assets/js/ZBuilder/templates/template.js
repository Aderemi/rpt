const getPost = () => {
    return fetch (`http://192.168.1.157:8081/api/report/queries`)
    .then(res => res.json)
.then(post => console.log(post));
}

getPost();