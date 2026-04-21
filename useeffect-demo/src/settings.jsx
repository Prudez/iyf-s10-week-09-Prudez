import useLocalStorage from './hooks/useLocalStorage'

function Settings() {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [fontSize, setFontSize] = useLocalStorage('fontSize', 16)

    return (
        <div>
            <h2>Settings</h2>

            <label>Theme:</label>
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <br /><br />

            <label>Font Size: {fontSize}</label>
            <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
            />
        </div>
    )
}

export default Settings