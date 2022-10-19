
export const TODO_URL = 'http://localhost:3001/todos/'

export const fetchCreate = (url, data) => {
  fetch(url, {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(data)
  })
  .then((data) => {
    window.location.reload()
  })
  .catch((err) => {
    console.log('Error', err)
  })
}

export const fetchDelete = (url, id) => {
  fetch(`${url}${id}`, {
    method: "DELETE",
  })
  .then(() => {
    window.location.reload()
  })
  .catch((err) => {
    console.log('Error', err)
  })
}

export const fetchPatch = (url, id, data) => {
  fetch(`${url}${id}`, {
    method: "PATCH",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(data),
  })
  .then(() => {
    window.location.reload()
  })
  .catch((err) => {
    console.log('Error', err)
  })
}