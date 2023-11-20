import Controller from './controller'

const Info = () => {
  const element = document.createElement('div')
  element.className = 'info'

  const title = document.createElement('h1')
  title.textContent = `Knight's Travails`
  title.className = 'title'

  const subTitle = document.createElement('p')
  subTitle.textContent = `Given enough steps, a knight can move from a square to any other square on the chess board. Don't believe it? See for yourself.
  The horse icon represents the knight and the star represents the final destination. When you move a piece on the board, the shortest course from the knight to the destination is automatically charted!
  `
  subTitle.className = 'subTitle'

  const gitHubStar = document.createElement('a')
  gitHubStar.className = 'gitHubStar'
  gitHubStar.href = 'https://github.com/shravzzv/ODIN-Knights-Travails-project'
  gitHubStar.textContent = 'Star on GitHub'

  element.appendChild(title)
  element.appendChild(subTitle)
  element.appendChild(gitHubStar)
  element.appendChild(Controller())
  return element
}

export default Info
