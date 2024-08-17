class Prato {
  category: string
  description: string
  title: string
  image: string
  id: number
  note: number
  estrela: string

  constructor(
    category: string,
    description: string,
    title: string,
    image: string,
    id: number,
    note: number,
    estrela: string
  ) {
    this.category = category
    this.description = description
    this.title = title
    this.image = image
    this.id = id
    this.note = note
    this.estrela = estrela
  }
}

export default Prato
