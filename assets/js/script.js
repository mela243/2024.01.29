document.addEventListener('DOMContentLoaded',function(){
    const lista_personajes= [
        {
            "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
            "name": "Pazu",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
            "gender": "Male",
            "age": "13",    "eye_color": "Black",
            "hair_color": "Brown",
            "specie": "Human"
          },
          {
            "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
            "name": "Lusheeta Toel Ul Laputa",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
            "gender": "Female",
            "age": "13",
            "eye_color": "Black",
            "hair_color": "Black",
            "specie": "Human"
          },
          {
            "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
            "name": "Dola",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
            "gender": "Female",
            "age": "60",
            "eye_color": "Black",
            "hair_color": "Peach",
            "specie": "Human"
          },
          {
            "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
            "name": "Romska Palo Ul Laputa",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
            "gender": "Male",
            "age": "33",
            "eye_color": "Black",
            "hair_color": "Brown",
            "specie": "Human"
          },
          {
            "id": "e08880d0-6938-44f3-b179-81947e7873fc",
            "name": "Uncle Pom",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
            "gender": "Male",
            "age": "Unspecified/Elderly",
            "eye_color": "Black",
            "hair_color": "White",
            "specie": "Human"
          },
        
        {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
        },
        {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
        },
        {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
        },
        {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
        },
        {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
        },
        {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
        },
        {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
        },
        {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
        }
    ]
    mostrarLista(lista_personajes);
});
function mostrarLista(lista) {
    lista.forEach(lista_informacion => {
    const personajes = document.createRange().createContextualFragment(
    `
    <div id="tarjeta">
            <img src="${lista_informacion.img}" alt="">
            <h2 id="name">${lista_informacion.name}</h2>
            <div id="gender">${lista_informacion.gender}</div>
            <div id="age">${lista_informacion.age}</div>
            <div id="eye_color">${lista_informacion.eye_color}</div>
            <div id="hair>_color">${lista_informacion.hair_color}</div>
            <div id="specie">${lista_informacion.specie}</div>
        </div>
    `
    );
    const main = document.querySelector("main");
    main.append(personajes)
    });
}