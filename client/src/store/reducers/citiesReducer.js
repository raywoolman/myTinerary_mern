// export function fetchingCities(){
//     return {
//         type: 'FETCH_CITIES'
//     }
// }

// export function fetchCitiesSuccess(cities) {
//     return {
//         type: "FETCH_CITIES_SUCCESS",
//         cities
//     };
// }

// export function fetchCitiesFail(error) {
//     return {
//         type: "FETCH_CITIES_FAIL",
//         error
//     }
// };

// export function fetchCities() {
//     return dispatch => {
//         fetch("/api/cities")
//             .then(r => r.json())
//             .then(json => {
//                 dispatch(fetchCitiesSuccess(json));
//             })
//             .catch(err => {
//                 dispatch(fetchCitiesFail(err))
//             })
//         }
// }

// //search
// export function search(value) {
//     return {type: 'SEARCH', value}
// };