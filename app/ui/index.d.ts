interface IElement{
    id: string,
    name: string,
    className: string
}
export interface IInput{
    type: string,
    placeholder: string,
    limit: number,
    onChange: (e: InputEvent)=>void,
    element: IElement
}

export interface IButton{
    content: any,
    element: IElement
}