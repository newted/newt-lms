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

// Sort array of objects by status and then by due date (used in Assignments &
// Quizzes)
export function statusDueDateSort(a, b) {
  const aDueDate = new Date(a.dueDate)
  const bDueDate = new Date(b.dueDate)
  const aStatus = a.status
  const bStatus = b.status

  // sort by status (Incomplete and In Progress are grouped together)
  if (aStatus === bStatus ||
    aStatus === "Incomplete" && bStatus === "In Progress" ||
    aStatus === "In Progress" && bStatus === "Incomplete"
  ) {
    // second-order sort -- sort by due date -- if status is either Incomplete
    // or In Progress or if status is Complete
    return aDueDate - bDueDate
  } else {
    if (aStatus === "Incomplete" || aStatus === "In Progress") {
      return -1
    } else if (aStatus === "Complete") {
      return 1
    } else {
      return 0
    }
  }
}
