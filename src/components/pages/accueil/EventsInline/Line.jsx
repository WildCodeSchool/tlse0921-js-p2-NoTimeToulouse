// import useFetch from '../../../api/useFetch';
// import DisplayEvents from '../../evenements/DisplayEvents';

// const Line = ({ theme }) => {
//   const {
//     data: events,
//     error,
//     isLoading,
//   } = useFetch(
//     `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=5&refine.categorie_de_la_manifestation=${theme}`,
//   );

//   if (error) {
//     return <div>An error occurred</div>;
//   }
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//     <DisplayEvents />
//     </>
//   )
// };

// export default Line;
