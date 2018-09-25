import newt from './newt'

const newtDb = newt.firestore()
const settings = {timestampsInSnapshots: true}
newtDb.settings(settings)

export default newtDb
