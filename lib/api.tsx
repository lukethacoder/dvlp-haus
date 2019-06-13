import { loadFirebase } from './firebase'
import { UsefulLinksProps } from '../interfaces'

// API Endpoints

export const getUsefulLinks = async () => {
  return await loadFirebase().firestore().collection('useful-links')
    .get()
    .then((snapshot: any) => {
      let data: any = [];
      snapshot.forEach((doc: any) => {
        data.push({
            id: doc.id,
            ...doc.data()
        })
      })
      let categories = [...new Set(data.map((item: UsefulLinksProps) => item.category))];
      console.log('categories', categories)
      return {
        useful_links: data,
        categories: categories
      };
    })
  }

export const setUsefulLinkFlame = async (link_id: string) => {

  return await loadFirebase().firestore().collection('useful-links').doc(link_id)
    .update({
      flames: loadFirebase().firestore.FieldValue.increment(1)
    })
    .then(() => {
      console.log('setUsefulLinkFlame = snapshot.data()')
    })
    .catch((error => console.log('error', error)))
  }