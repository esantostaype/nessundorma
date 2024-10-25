export interface Category {
  id: number
  count: number
  name: string
  image: Image
}

export interface Image {
  url: string
  alt: string
  title: string
}