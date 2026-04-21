function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg min-w-[300px]">
                {children}

                <button
                    className="mt-4 px-4 py-2 bg-gray-200"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal