import { useAlert } from "./alert/AlertContext";

export default function Main() {
    const alert = useAlert();

    return (
        <>
            <h1>Привет Context</h1>
            <button onClick={() => alert.show(Math.random())} 
                disabled={alert.visible}>Показать alert</button>
        </>
    )
}