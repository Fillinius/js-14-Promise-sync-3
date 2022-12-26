const USER = 'https://jsonplaceholder.typicode.com/albums'
const dataContainer = document.querySelector('#data-container')

const createUserElement = (album)=>{
    const userElement = document.createElement('li')
    userElement.textContent = album
    return userElement
}
const getLoader = ()=>{
  const hiddenHTML = document.querySelector('#loader')
  const isHidden = hiddenHTML.hasAttribute('hidden')
  if(isHidden){
    hiddenHTML.removeAttribute('hidden')
  } else {hiddenHTML.setAttribute('hidden', '')}
}

const renderAlbums = ()=>{
  getLoader ()
  const result = fetch(USER)
  console.log(result)
  result.then((response)=>{
    if(!response.ok){
      throw new Error('Ошибка запроса')
      }return response.json()
  })
  .then((user)=>{
    console.log('user', user);
    user.forEach(user => {
      const userHTML = createUserElement(user.title)
      dataContainer.append(userHTML)})
  })
  .catch((err)=>{
    console.log('err', err);
  })
  .finally(()=>{
    getLoader ()
    console.log('Завершение кода');
  }) 
}
renderAlbums()

