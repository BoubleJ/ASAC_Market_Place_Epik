export type List = Array<ListProps>

export interface ListProps extends Body {
  title: string
  filterTitle: string
}

export interface Body {
  Id: number
  Question: string
  Answer: string[]
}
