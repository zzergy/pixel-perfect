export interface CanvasData {
    rows: number,
    columns: number,
    baseColor: string,
    gridColor: string,
    drawingColor: string,
    pixelsGrid: string[][]
}

export interface ModalStates {
    deleteCanvasModal?: boolean,
    createCanvasModal?: boolean,
    clearCanvasModal?: boolean
}

export enum ModalTypes {
    clear = 'clearCanvasModal',
    create = 'createCanvasModal',
    delete = 'deleteCanvasModal'
}

export interface CanvasActionTools {
    isEraseMode: boolean,
    isColorFillMode: boolean,
    canvasHistory: string[][][],
    historyIndex: number
}

//allows you to get a property from another interface into your type
export type Dimensions = Pick<CanvasData, "rows" | 'columns'>
