interface MailIconProps{
    color?:string,
    size?: number
}

function PlaceIcon(props:MailIconProps) {
    
    const { color, size} = props;
    const colorOption = `${color ? color : '#006CE5'}`;
    const sizeIcon = `${size ? size : 20}`;

    return (
        <svg width={sizeIcon} height={sizeIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.8304 0.615234C6.23672 0.615234 3.31299 3.53897 3.31299 7.13264C3.31299 11.6495 9.83681 19.3652 9.83681 19.3652C9.83681 19.3652 16.3478 11.4274 16.3478 7.13264C16.3478 3.53897 13.4242 0.615234 9.8304 0.615234ZM11.7968 9.04095C11.2546 9.58305 10.5426 9.85416 9.8304 9.85416C9.11835 9.85416 8.40607 9.58305 7.86407 9.04095C6.77975 7.95673 6.77975 6.19251 7.86407 5.10818C8.38913 4.5829 9.08756 4.29359 9.8304 4.29359C10.5732 4.29359 11.2716 4.58301 11.7968 5.10818C12.8812 6.19251 12.8812 7.95673 11.7968 9.04095Z" fill={colorOption} />
        </svg>

    );
}

export default PlaceIcon;