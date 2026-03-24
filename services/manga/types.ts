export interface Manga {
  id: string
  type: string
  attributes: {
    title: { [key: string]: string }
    description: { [key: string]: string }
    status: string
    year: number
    tags: any[]
  }
  relationships: any[]
}

export interface CoverArt {
  id: string
  attributes: {
    fileName: string
  }
}

export interface MappedManga extends Manga {
  coverUrl: string | null
}
