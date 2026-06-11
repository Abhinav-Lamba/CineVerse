export const mockMovies = [
  {
    id: 1,
    title: 'Midnight Horizon',
    genre: 'Sci-Fi',
    rating: '8.8',
    duration: '2h 18m',
    synopsis: 'A space courier gets pulled into an interplanetary mystery that could change humanity.',
    poster: '🎬',
  },
  {
    id: 2,
    title: 'Neon City',
    genre: 'Action',
    rating: '8.2',
    duration: '1h 57m',
    synopsis: 'A cyberpunk racer must protect the city from a rogue AI takeover.',
    poster: '🎥',
  },
  {
    id: 3,
    title: 'Echoes of Tomorrow',
    genre: 'Drama',
    rating: '7.9',
    duration: '2h 04m',
    synopsis: 'A time traveler returns to repair the life she left behind.',
    poster: '🍿',
  },
];

export const mockLocations = ['Bengaluru', 'Mumbai', 'Delhi'];

export const mockTheatres = [
  { id: 1, name: 'CineHub Orion', city: 'Bengaluru', screens: 4 },
  { id: 2, name: 'Galaxy Plaza', city: 'Bengaluru', screens: 3 },
  { id: 3, name: 'Metro Max', city: 'Mumbai', screens: 5 },
];

export const mockScreens = [
  { id: 1, name: 'Screen 1', type: 'IMAX', showtimes: ['10:30 AM', '2:00 PM', '7:30 PM'] },
  { id: 2, name: 'Screen 2', type: '4DX', showtimes: ['11:00 AM', '3:15 PM', '8:00 PM'] },
];

export const mockSeats = [
  { id: 1, label: 'A1', available: true },
  { id: 2, label: 'A2', available: false },
  { id: 3, label: 'A3', available: true },
  { id: 4, label: 'A4', available: true },
  { id: 5, label: 'B1', available: true },
  { id: 6, label: 'B2', available: true },
  { id: 7, label: 'B3', available: false },
  { id: 8, label: 'B4', available: true },
];

export const mockBookings = [
  { id: 'BK101', movie: 'Neon City', date: '12 Jun 2026', status: 'Confirmed' },
  { id: 'BK102', movie: 'Midnight Horizon', date: '19 Jun 2026', status: 'Pending' },
];

export const mockUsers = [
  { id: 1, name: 'Ava Rao', role: 'customer', email: 'ava@example.com', password: '123456' },
  { id: 2, name: 'Samir Mehta', role: 'owner', email: 'samir@example.com', password: '123456' },
  { id: 3, name: 'Nina Shah', role: 'admin', email: 'nina@example.com', password: '123456' },
];

export const mockReports = [
  { label: 'Occupancy', value: '86%' },
  { label: 'Revenue', value: '₹4.8L' },
  { label: 'Pending Requests', value: '7' },
];
