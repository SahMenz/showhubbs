 const hamburger = document.querySelector('.bars');
 const barer = document.querySelector('.barer');
 const response = document.querySelector('.response')

 hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    response.classList.toggle("active");
});

document.querySelectorAll(".assu").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
}));


// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://ott-details.p.rapidapi.com/advancedsearch',
//   params: {
//     start_year: '2020',
//     end_year: '2023',
//     min_imdb: '6',
//     max_imdb: '7.8',
//     genre: 'action',
//     language: 'english',
//     type: 'movie',
//     sort: 'latest',
//     page: '1'
//   },
//   headers: {
//     'X-RapidAPI-Key': '5a57a85063msh57800c3e09ded55p1e17b4jsnfffa45f9164a',
//     'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// const options = {
//     method: 'GET',
//     url: 'https://ott-details.p.rapidapi.com/advancedsearch',
//     params: {
//       start_year: '2020',
//       end_year: '2023',
//       min_imdb: '6',
//       max_imdb: '7.8',
//       genre: 'action',
//       language: 'english',
//       type: 'movie',
//       sort: 'latest',
//       page: '1'
//     },
//     headers: {
//       'X-RapidAPI-Key': '5a57a85063msh57800c3e09ded55p1e17b4jsnfffa45f9164a',
//       'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options)
//     .then(Response => Response.json())
//     .then(data => console.log(data))
//     .catch(function (error) {
//      console.error(error);
//   });