const configValues = {
  name: "IWD Cerrado 2024",
  eventDate: "2024-04-15T08:00:00",
  eventLinkRegistrationUrl: "https://doity.com.br/iwd-cerrado-2024",
  place: "A definir",
  formattedDate: "Dia 15 de Abril de 2024",
  email: "gdggoiania@gmail.com",
};

const resolveURL = () => {
  let finalUrl = "";
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    finalUrl = process.env.NEXT_PUBLIC_SITE_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    finalUrl += `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return finalUrl;
};

export const server = resolveURL();

export default configValues;
