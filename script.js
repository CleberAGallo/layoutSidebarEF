// Função para controlar a visibilidade do sidebar e a posição do toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');

    sidebar.classList.toggle('hidden');

    // Verifica se o sidebar está visível ou recolhido
    if (sidebar.classList.contains('hidden')) {
        // Se estiver recolhido, mova o toggle para o canto esquerdo
        toggleButton.style.left = '10px';
    } else {
        // Se estiver visível, traga o toggle de volta
        toggleButton.style.left = '250px'; // Ou a largura do seu sidebar
    }
}

// Event listener para o botão do sidebar
const toggleButton = document.getElementById('toggleSidebar');
toggleButton.addEventListener('click', toggleSidebar);
