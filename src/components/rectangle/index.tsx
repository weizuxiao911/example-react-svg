import { FC } from "react"

export type RectangleProps = {
    text?: string
    width: number
    height: number
    x: number
    y: number
    background?: string
}

const Rectangle: FC<RectangleProps> = (props: any) => {

    const { text, width, height, x, y, background, onChange } = props

    return (
        <g width={width} height={height}>
            <rect
                width={width}
                height={height}
                x={x}
                y={y}
                style={{ fill: background ?? 'lightblue' }}
            >
                <title>{text}</title>
            </rect>
            <text
                x="50"
                y="150"
                fill="black"
            >
                {text}
            </text>
        </g>
    )

}

export default Rectangle