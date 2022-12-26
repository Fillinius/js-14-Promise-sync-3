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

const renderAlbums = async ()=>{
  try {getLoader ()
      const result = await fetch(USER)
      console.log('result:', result)
      if(!result.ok){
        throw new Error('Ошибка запроса')
        }
      const response = await result.json()
      console.log('response:', response)
      const alboms = response.forEach(user => {
      const userHTML = createUserElement(user.title)
      dataContainer.append(userHTML)})
  }
  catch(err){
    console.log('err', err);
  }
  finally{
    getLoader ()
    console.log('Завершение кода');
  } 
}
renderAlbums()

