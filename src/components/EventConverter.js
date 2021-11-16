import useFetch from './api/useFetch';

const EventConverter = (url) => {
  const { data: events, error, isLoading } = useFetch(url);

  console.log(events);
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    console.log(isLoading);
  }

  const convertedEvents = events.records.map((e) => {
    const {
      nom_de_la_manifestation: name,
      dates_affichage_horaires: dates,
      type_de_manifestation: eventType,
      theme_de_la_manifestation: eventTheme,
      descriptif_court: littleDescription,
      descriptif_long: longDescription,
      commune: city,
      reservation_site_internet: booking,
      station_metro_tram_a_proximite: access,
      geo_point: geoPoint /* [Lat, Long] */,
      tarif_normal: price,
      horaire_debut: startHour,
      lieu_adresse_2: adress,
      code_postal: zipCode,
    } = e.fields;
    return {
      ...e,
      fields: {
        name,
        dates,
        eventType,
        eventTheme,
        littleDescription,
        longDescription,
        city,
        booking,
        access,
        geoPoint,
        // geopoint[latitude, longitude]
        price,
        startHour,
        adress,
        zipCode,
      },
    };
  });
  return convertedEvents;
};

export default EventConverter;
