import Controller from './controller'

const Info = () => {
  const element = document.createElement('div')
  element.className = 'info'

  const title = document.createElement('h1')
  title.textContent = `Knight's Travails`
  title.className = 'title'

  const subTitle = document.createElement('p')
  subTitle.textContent = `Given enough steps, a knight can move from a square to any other square on the chess board. Don't believe it, see for yourself.`
  subTitle.className = 'subTitle'

  element.appendChild(title)
  element.appendChild(subTitle)
  element.appendChild(Controller())
  return element
}

export default Info
