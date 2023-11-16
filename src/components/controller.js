const Controller = () => {
  const element = document.createElement('div')
  element.className = 'controller'

  const heading = document.createElement('h1')
  heading.textContent = `Knight's Travails`
  heading.className = 'title'

  const sub = document.createElement('p')
  sub.textContent = `Given enough steps, a knight can move from a square to any other square on the chess board. Don't believe it, see for yourself.`

  const knight = document.createElement('button')
  knight.textContent = 'Move knight 🐴'

  const stop = document.createElement('button')
  stop.textContent = 'Move stop 🛑'

  const traverse = document.createElement('button')
  traverse.textContent = '▶'

  element.appendChild(heading)
  element.appendChild(sub)
  element.appendChild(knight)
  element.appendChild(stop)
  element.appendChild(traverse)
  return element
}

export default Controller
