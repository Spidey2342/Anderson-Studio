document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const sidebar = document.querySelector('.sidebar');

    if (mobileMenu && sidebar) {
        mobileMenu.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }

    const categoryButtons = document.querySelectorAll('.category-button');
    const portfolioItems = document.querySelectorAll('.grid .item');

    if (categoryButtons.length > 0 && portfolioItems.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const selectedCategory = button.getAttribute('data-category');
                portfolioItems.forEach(item => {
                    if (item.classList) {
                        if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    const viewFigmaButtons = document.querySelectorAll('.view-figma-btn');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenFigmaEmbed = document.getElementById('fullscreen-figma-embed');
    const closeFullscreenBtn = document.getElementById('close-fullscreen');

    viewFigmaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const figmaUrl = button.dataset.figmaUrl;
            if (figmaUrl) {
                fullscreenFigmaEmbed.src = figmaUrl;
                fullscreenOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeFullscreenBtn.addEventListener('click', () => {
        fullscreenOverlay.classList.remove('active');
        fullscreenFigmaEmbed.src = '';
        document.body.style.overflow = '';
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
            closeFullscreenBtn.click();
        }
    });

    fullscreenOverlay.addEventListener('click', (event) => {
        if (event.target === fullscreenOverlay) {
            closeFullscreenBtn.click();
        }
    });
});
