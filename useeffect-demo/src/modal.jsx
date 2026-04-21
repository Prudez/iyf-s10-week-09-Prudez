import useToggle from './hooks/useToggle'

function Modal() {
    const [isOpen, { toggle, setFalse }] = useToggle(false)

    return (
        <div>
            <button onClick={toggle}>Open Modal</button>

            {isOpen && (
                <div className="modal">
                    <p>This is a modal</p>
                    <button onClick={setFalse}>Close</button>
                </div>
            )}
        </div>
    )
}

export default Modal