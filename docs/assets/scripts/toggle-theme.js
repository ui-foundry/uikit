document.addEventListener('DOMContentLoaded', () => {
    const themeKey = 'theme-preference'
    const icon = document.getElementById('theme-icon')
    const label = document.getElementById('theme-label')
    const button = document.getElementById('theme-toggle')
    const root = document.documentElement

    const systemPref = window.matchMedia('(prefers-color-scheme: dark)')
    const saved = localStorage.getItem(themeKey)

    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme)
        updateUI(theme)
    }

    const updateUI = (theme) => {
        if (theme === 'dark') {
            icon.textContent = '🌙'
            label.textContent = 'Dark'
        } else if (theme === 'light') {
            icon.textContent = '🌞'
            label.textContent = 'Light'
        } else {
            icon.textContent = '🌓'
            label.textContent = 'Auto'
        }
    }

    // Init
    if (saved === 'light' || saved === 'dark') {
        applyTheme(saved)
    } else {
        applyTheme(systemPref.matches ? 'dark' : 'light')
        updateUI('auto')
    }

    // Cycle between light → dark → auto
    button.addEventListener('click', () => {
        const current = root.getAttribute('data-theme')
        const next = current === 'light' ? 'dark' : current === 'dark' ? 'auto' : 'light'

        if (next === 'auto') {
            localStorage.removeItem(themeKey)
            applyTheme(systemPref.matches ? 'dark' : 'light')
        } else {
            localStorage.setItem(themeKey, next)
            applyTheme(next)
        }
    })

    // React to system change (only in auto mode)
    systemPref.addEventListener('change', (e) => {
        if (!localStorage.getItem(themeKey)) {
            applyTheme(e.matches ? 'dark' : 'light')
        }
    })
})
