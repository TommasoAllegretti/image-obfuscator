import { Image } from './types'

export function obfuscate() {
  const imageList: Image[] = []

  const nodeList: NodeListOf<HTMLImageElement> =
    document.querySelectorAll('img')

  nodeList.forEach((node) => {
    const img: Image = {
      node,
      rect: node.getBoundingClientRect()
    }

    imageList.push(img)
  })

  imageList.forEach((image) => {
    const newElement = document.createElement('div')

    let styleString = ''

    styleString += `width: ${image.rect.width}px !important; `
    styleString += `height: ${image.rect.height}px !important; `
    styleString += `background-color: pink !important; `

    newElement.setAttribute('style', styleString)

    const parent = image.node.parentNode

    parent?.insertBefore(newElement, image.node)

    image.node.remove()
  })
}
