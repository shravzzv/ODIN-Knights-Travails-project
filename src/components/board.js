const Board = () => {
  const element = document.createElement('div')
  element.className = 'board'

  const indices = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // store an index as '0,0'
      indices.push([i, j].join(','))
    }
  }

  let j = 0

  for (let i = 0; i < 64; i++) {
    let square = document.createElement('span')
    square.className = 'square'
    square.setAttribute('data-index', indices[j++])
    element.appendChild(square)
  }

  return element
}

export default Board
