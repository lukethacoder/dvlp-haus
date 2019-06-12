import { UsefulLinksProps } from '../interfaces';

/** Dummy user data. */
export const usefulLinks: UsefulLinksProps[] = [
  {
    id: '00001',
    name: 'Get the Font',
    url: 'https://www.getthefont.com',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque mauris, varius eget risus et, consectetur condimentum orci. Quisque et dapibus nisi. Suspendisse finibus elementum hendrerit. Phasellus sagittis et ligula id faucibus. Nam blandit nisi elit, in aliquet nulla facilisis nec. Maecenas hendrerit porta urna rutrum efficitur.',
    category: 'General',
    flames: 4,
  },
  {
    id: '00002',
    name: 'JustRem',
    url: 'https://justrem.xyz',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque mauris, varius eget risus et, consectetur condimentum orci. Quisque et dapibus nisi. Suspendisse finibus elementum hendrerit. Phasellus sagittis et ligula id faucibus. Nam blandit nisi elit, in aliquet nulla facilisis nec. Maecenas hendrerit porta urna rutrum efficitur.',
    category: 'General',
    flames: 100,
  },
  {
    id: '00003',
    name: 'GatsbyJS',
    url: 'https://www.gatsbyjs.org/docs/',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque mauris, varius eget risus et, consectetur condimentum orci. Quisque et dapibus nisi. Suspendisse finibus elementum hendrerit. Phasellus sagittis et ligula id faucibus. Nam blandit nisi elit, in aliquet nulla facilisis nec. Maecenas hendrerit porta urna rutrum efficitur.',
    category: 'Docs',
    flames: 8,
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

export async function getAllCategories() {
  const allCategories: any = [...new Set(usefulLinks.map(link => link.category))];

  if (!allCategories) {
    throw new Error('Cannot find any categories');
  }

  return allCategories;
}

export async function findCategory(category?: string) {
  const filteredLinks = category
    ? usefulLinks.filter(data => data.category === category)
    : usefulLinks;

  if (!filteredLinks) {
    throw new Error('Cannot find any links with that category');
  }
  if (!Array.isArray(usefulLinks)) {
    throw new Error('Cannot find useful links');
  }

  return filteredLinks;
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(usefulLinks)) {
    throw new Error('Cannot find useful links');
  }

  return usefulLinks;
}
