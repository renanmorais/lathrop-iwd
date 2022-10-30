const configValues = {
  name: 'Devfest Cerrado 2022',
  eventDate: '2022-11-26T08:00:00',
  eventLinkRegistrationUrl: 'https://doity.com.br/devfest-cerrado-2022',
  place: 'Local: Varanda 402 - Uberlândia',
  formattedDate: 'Dia 26 Novembro 2022',
  email: 'gdg.uberlandia@gmail.com',
}

const dev = process.env.NODE_ENV == 'development';

export const server = dev ? 'http://localhost:3000' : '';

export default configValues;
