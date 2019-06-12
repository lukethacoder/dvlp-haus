import { UsefulLinksProps } from '../interfaces';

/** Dummy user data. */
export const usefulLinks: UsefulLinksProps[] = [
  {
    id: '00001',
    name: 'Get the Font',
    url: 'https://www.getthefont.com',
    desc: '',
    category: 'General',
    flames: 10,
  },
  {
    id: '00002',
    name: 'JustRem',
    url: 'https://justrem.xyz',
    desc: '',
    category: 'General',
    flames: 100,
  },
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id: number | string) {
  const selected = usefulLinks.find(data => data.id === id);

  if (!selected) {
    throw new Error('Cannot find useful link');
  }

  return selected;
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(usefulLinks)) {
    throw new Error('Cannot find useful links');
  }

  return usefulLinks;
}
