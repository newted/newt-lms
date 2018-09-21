import schoolInstance from './firebase'

const schoolDb = schoolInstance.firestore()
const settings = {timestampsInSnapshots: true}
schoolDb.settings(settings)

export default schoolDb
