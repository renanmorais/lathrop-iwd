const configValues = {
  name: "IWD Cerrado 2023",
  eventDate: "2023-04-15T08:00:00",
  eventLinkRegistrationUrl: "https://doity.com.br/iwd-cerrado-2023",
  place: "Local: Unialfa Perimetral - Goiânia",
  formattedDate: "Dia 15 Abril 2023",
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
