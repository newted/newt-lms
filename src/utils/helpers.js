// Convert an item object (assignment, announcement, quiz, etc.) into an array
// of objects sorted by the passed sortByField
export function objectToArray(object, sortByField) {
  let infoArray = []

  Object.keys(object).forEach((itemId) => {
    let itemObj = object[itemId]
    const timestamp = sortByField === 'dueDate'
      ? itemObj['dueTimestamp']
      : itemObj['creationTimestamp']
    const date = timestamp.toDate()
    const dateString = date.toLocaleString()

    // Add itemId to object
    itemObj['id'] = itemId

    // Add dueDate or creationDate Date object
    sortByField === 'dueDate'
      ? itemObj['dueDate'] = dateString
      : itemObj['creationDate'] = dateString

    infoArray.push(itemObj)
  })

  if (sortByField === 'dueDate') {
    infoArray.sort((a, b) => {
      const aDueDate = new Date(a.dueDate)
      const bDueDate = new Date(b.dueDate)

      return aDueDate - bDueDate
    })
  } else {
    infoArray.sort((a, b) => {
      const aDueDate = new Date(a.creationDate)
      const bDueDate = new Date(b.creationDate)

      return bDueDate - aDueDate
    })
  }

  return infoArray
}
