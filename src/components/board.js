const Board = () => {
  const element = document.createElement('div')
  element.className = 'board'

  const indices = []
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      // store an index as '0,0' : x,y
      indices.push([j, i].join(','))
    }
  }

  let count = 0

  for (let i = 0; i < 64; i++) {
    let square = document.createElement('span')
    square.className = 'square'
    square.setAttribute('data-index', indices[count++])
    element.appendChild(square)
  }

  return element
}

export default Board
