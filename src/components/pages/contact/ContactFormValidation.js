export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Veuillez renseigner une adresse email requise';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Adresse email invalide';
  }
  if (!values.firstname) {
    errors.firstname = 'Veuillez renseigner un prénom.';
  }
  if (!values.lastname) {
    errors.lastname = 'Veuillez renseigner un nom de famille.';
  }
  if (!values.phone) {
    errors.phone = 'Veuillez renseigner un numéro de téléphone.';
  } else if (
    !/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(
      values.phone,
    )
  ) {
    errors.phone = 'Numéro de téléphone invalide';
  }
  if (!values.message) {
    errors.message = 'Veuillez renseigner le sujet de votre demande.';
  } else if (values.message.length < 20) {
    errors.message = 'Veuillez renseigner au moins 20 caractères.';
  }
  return errors;
}
