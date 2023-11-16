const Controller = () => {
  const element = document.createElement('label')
  element.className = 'toggle'

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.name = 'toggle'

  const content = document.createElement('div')
  content.className = 'content'

  element.appendChild(input)
  element.appendChild(content)
  return element
}

export default Controller
