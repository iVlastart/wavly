interface IElement{
    id: string,
    name: string,
    className: string
}
export interface IInput{
    type: string,
    placeholder: string,
    limit: number,
    element: IElement
}

export interface IButton{
    content: string,
    element: IElement
}