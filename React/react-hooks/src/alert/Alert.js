import { useAlert } from "./AlertContext";

export default function Alert() {
    const alert = useAlert()

    if(!alert.visible) return null;

    return (
        <div onClick={alert.hide}>
            <p style={{fontSize: 40, fontFamily: 'cursive', background: 'red'}}>{alert.text}</p>
        </div>
    )
}