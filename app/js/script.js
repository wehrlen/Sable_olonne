document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.querySelector('.tabs');
    const panelsContainer = document.querySelector('.panels');

    // Récupérer les onglets et les panneaux existants
    const tabs = document.querySelectorAll('.tabs .tab');
    const panels = document.querySelectorAll('.panels .panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetId = this.getAttribute('for');
            showPanel(targetId);
        });
    });

    function showPanel(panelId) {
        panels.forEach(panel => {
            if (panel.id === panelId + '-panel') {
                panel.style.display = 'block';
            } else {
                panel.style.display = 'none';
            }
        });
        tabs.forEach(tab => {
            if (tab.getAttribute('for') === panelId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    // Afficher le premier panneau par défaut
    if (tabs.length > 0) {
        showPanel(tabs[0].getAttribute('for'));
    }
});
