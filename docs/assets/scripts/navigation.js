document.addEventListener('DOMContentLoaded', function () {
    // Add click handlers to all navigation links
    document.querySelectorAll('.doc-aside-nav-links a').forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault()
            const url = this.href
            loadContent(url, this)
        })
    })
})

function loadContent(url, activeLink) {
    // const loadingIndicator = document.getElementById('loading-indicator')
    // loadingIndicator.style.display = 'block'

    document.getElementById('main-content').innerHTML = 'loading...'

    document.querySelectorAll('.doc-aside-nav-links a').forEach((link) => {
        link.classList.remove('active')
    })
    activeLink.classList.add('active')
    // Load content via fetch
    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(html, 'text/html')
            const newContent = doc.querySelector('#main-content')
            if (newContent) {
                document.getElementById('main-content').innerHTML = newContent.innerHTML
                document.querySelector('main').scrollTop = 0
                history.pushState({}, '', url)
            }
        })
        .catch((error) => console.error('Error loading content:', error))
        .finally(() => {
            // loadingIndicator.style.display = 'none'
        })
}
