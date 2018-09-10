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


export function formatDataForTable(dataByCourse, courseItems, sortByField) {
  let dataArray = []

  Object.keys(dataByCourse).forEach((courseId) => {
    const itemObj = dataByCourse[courseId]
    Object.keys(itemObj).forEach((itemId) => {
      const timestamp = sortByField === 'dueDate'
        ? itemObj[itemId]['dueTimestamp']
        : itemObj[itemId]['creationTimestamp']
      const date = timestamp.toDate()
      const dateString = date.toLocaleString()

      // Add item ID to item object
      itemObj[itemId]['id'] = itemId

      // Add course shortname to item object
      itemObj[itemId]['courseShortname'] = courseItems[courseId].shortname

      // Add due date or creation date to item object
      sortByField === 'dueDate'
        ? itemObj[itemId]['dueDate'] = dateString
        : itemObj[itemId]['creationTimestamp'] = dateString

      dataArray.push(itemObj[itemId])
    })
  })

  return dataArray
}

// Sort array of objects by status and then by due date (used in Assignments &
// Quizzes)
export function statusDueDateSort(a, b) {
  const aDueDate = new Date(a.dueDate)
  const bDueDate = new Date(b.dueDate)
  const aStatus = a.status
  const bStatus = b.status

  // second-order sort -- sort by due date -- if status is either Incomplete
  // or In Progress or if status is Complete
  if ((aStatus === bStatus) ||
    (aStatus === "Incomplete" && bStatus === "In Progress") ||
    (aStatus === "In Progress" && bStatus === "Incomplete")
  ) {
    return aDueDate - bDueDate
  } else {
    // sort by status (Incomplete and In Progress are grouped together)
    if (aStatus === "Incomplete" || aStatus === "In Progress") {
      return -1
    } else if (aStatus === "Complete") {
      return 1
    } else {
      return 0
    }
  }
}
