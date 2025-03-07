const configValues = {
  name: "IWD Cerrado 2025",
  eventDate: "2025-04-26T08:00:00",
  eventLinkRegistrationUrl: "https://doity.com.br/iwd-cerrado-2025",
  place: "Local: Goiânia-GO",
  formattedDate: "Dia 26 de Abril de 2025",
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
