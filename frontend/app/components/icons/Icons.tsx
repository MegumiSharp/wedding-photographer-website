interface IconProps {
    size?: number;
    color?: string;
}

export function DotSvg({ size = 24, color = "#27443F" }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.33333" cy="5.33333" r="5.33333" fill={color}/>
        </svg>
    );
}
