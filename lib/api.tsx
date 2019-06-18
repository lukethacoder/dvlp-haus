import { loadFirebase } from './firebase'
// import { UsefulLinksProps } from '../interfaces'

// API Endpoints

// export const setUsefulLinkFlame = async (link_id: string) => {
//   return await loadFirebase().firestore().collection('useful-links').doc(link_id)
//     .update({
//       flames: loadFirebase().firestore.FieldValue.increment(1)
//     })
//     .then(() => {
//       console.log('setUsefulLinkFlame = snapshot.data()')
//     })
//     .catch((error => console.log('error', error)))
// }