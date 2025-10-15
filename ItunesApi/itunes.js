  let input = document.querySelector('input');
        let button = document.querySelector('button');


        button.addEventListener('click', myClick);


        function myClick(){

            let artista = input.value;

            const apiUrl = `https://itunes.apple.com/search?term=${artista}&media=music&limit=20`

            console.log(apiUrl);

            fetch(apiUrl)

            .then(
            (response) => response.json()
            )

            .then(
                (data) => {
                    console.log(data)

                    let container = `<thead>
    
                        </thead>
                        <tbody>
                        
                        `


                    data.results.forEach(
                        
                    element => {

                    console.log(typeof(data))


                        container+=

                        `

                       <tr><td> ${element.trackName}</td>
                       <td> ${element.artistName}</td>
                       <td> <img src ='${element.artworkUrl100}'></td>
                        <td><audio controls src='${element.previewUrl}'></audio></td></tr>

                        `
                          console.log('ciao')
                    });

                container+=`</tbody>`
                document.querySelector('table').innerHTML = container
                }

             


            )


            .catch(
                (error) => console.log(error)
            )



        }








