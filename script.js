let studetn = [
    {
        id: 1,
        names: "axmat",
        age: 16,
        surname: 'Qahrmanov',
        Image: 'https://funny.klev.club/smeh/uploads/posts/2024-05/funny-klev-club-n97c-p-smeshnie-kartinki-chuchelo-volka-1.jpg',
        pasword: 78773,
        login: 'axmat123'
    },
    {
        id: 2,
        names: "Kozim",
        age: 13,
        surname: 'Nigmatullaev',
        Image: 'https://avatars.mds.yandex.net/i?id=efa4abe2ebebff90fedc3f59a67c6dfa_l-4593530-images-thumbs&ref=rim&n=13&w=1080&h=1080',
        pasword: 54354,
        login: 'Kozim123'
    },
    {
        id: 3,
        names: "Jiyan",
        age: 13,
        surname: 'Jiyanovich',
        Image: 'https://i.ytimg.com/vi/dWyn9tfclUM/maxresdefault.jpg',
        pasword: 77777,
        login: 'jjj'
    },
    {
        id: 4,
        names: "AnimeOka",
        age: 13,
        surname: 'Hent7788',
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk1k3b2X8u0v7jv1nGmLZtW8gXc1x4J6z4Q&usqp=CAU',
        pasword: 233441,
        login: 'yamateKutasay'
    },
    {
        id: 5,
        names: "karisBobo",
        age: 13,
        surname: 'Yaponovich',
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk1k3b2X8u0v7jv1nGmLZtW8gXc1x4J6z4Q&usqp=CAU',
        pasword: 44412,
        login: 'karisBobo123'
    },
    {
        id: 6,
        names: "Echki",
        age: 13,
        surname: 'Elkayev',
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk1k3b2X8u0v7jv1nGmLZtW8gXc1x4J6z4Q&usqp=CAU',
        pasword: 5324,
        login: 'Echki123'
    },
    {
        id: 7,
        names: "Echki",
        age: 13,
        surname: 'Elkayev',
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk1k3b2X8u0v7jv1nGmLZtW8gXc1x4J6z4Q&usqp=CAU',
        pasword: 23454,
        login: 'Echki123'
    },
]


let container = document.querySelector('.container')
studetn.forEach((jenefer, index, array) => {


    let card = document.createElement('div')

    card.classList = 'card'
    card.innerHTML = `
     <img class="img" src="${jenefer.Image}" alt="">
    <h1>${jenefer.names}</h1>
    <p>${jenefer.surname}</p>

    `


    container.append(card)
    console.log(jenefer);

})


