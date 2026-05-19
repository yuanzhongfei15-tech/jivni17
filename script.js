let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let history = JSON.parse(localStorage.getItem('history') || '[]');

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCategories();
    renderHotTools();
    renderOfficeTools();
    renderLifeTools();
    renderDevTools();
    renderImageTools();
    renderFavorites();
    renderHistory();
    initEventListeners();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    }
}

function updateThemeIcons(isDark) {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    
    if (isDark) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function createToolCard(tool, index = 0) {
    const isFavorite = favorites.includes(tool.id);
    return `
        <div class="tool-card glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 fade-in" style="animation-delay: ${index * 0.05}s">
            <div class="flex items-start justify-between mb-3">
                <span class="text-3xl">${tool.icon}</span>
                <button class="favorite-btn text-2xl hover:scale-110 transition-transform" data-id="${tool.id}" title="${isFavorite ? '取消收藏' : '添加收藏'}">
                    ${isFavorite ? '⭐' : '☆'}
                </button>
            </div>
            <h3 class="font-bold text-lg mb-2">${tool.name}</h3>
            <p class="text-deep-600 dark:text-deep-400 text-sm mb-4 line-clamp-2">${tool.desc}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${tool.tags.map(tag => `<span class="text-xs px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">${tag}</span>`).join('')}
            </div>
            <button class="use-btn w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-2 rounded-xl hover:opacity-90 transition-all font-medium flex items-center justify-center gap-2" data-url="${tool.url}" data-id="${tool.id}">
                🚀 立即使用
            </button>
        </div>
    `;
}

function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = categories.map(cat => {
        const toolCount = tools[cat.id]?.length || 0;
        return `
            <div class="category-card glass-card rounded-2xl p-6 cursor-pointer hover:shadow-glow transition-all" data-category="${cat.id}">
                <div class="flex items-center gap-4 mb-3">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl">
                        ${cat.icon}
                    </div>
                    <div>
                        <h3 class="font-bold text-xl">${cat.name}</h3>
                        <p class="text-deep-600 dark:text-deep-400 text-sm">${toolCount} 款工具</p>
                    </div>
                </div>
                <p class="text-deep-600 dark:text-deep-400 text-sm">${cat.description}</p>
            </div>
        `;
    }).join('');
}

function renderHotTools() {
    const grid = document.getElementById('hotGrid');
    grid.innerHTML = hotTools.map((tool, index) => createToolCard(tool, index)).join('');
}

function renderOfficeTools() {
    const grid = document.getElementById('officeGrid');
    grid.innerHTML = officeTools.map((tool, index) => createToolCard(tool, index)).join('');
}

function renderLifeTools() {
    const grid = document.getElementById('lifeGrid');
    grid.innerHTML = lifeTools.map((tool, index) => createToolCard(tool, index)).join('');
}

function renderDevTools() {
    const grid = document.getElementById('devGrid');
    grid.innerHTML = devTools.map((tool, index) => createToolCard(tool, index)).join('');
}

function renderImageTools() {
    const grid = document.getElementById('imageGrid');
    grid.innerHTML = imageTools.map((tool, index) => createToolCard(tool, index)).join('');
}

function renderCategoryItems(categoryId) {
    const categoryTools = tools[categoryId] || [];
    const categoryInfo = categories.find(c => c.id === categoryId);
    const grid = document.getElementById('categoryItems');
    
    document.getElementById('currentCategory').textContent = `${categoryInfo?.icon || '📁'} ${categoryInfo?.name || '工具'} · ${categoryTools.length} 款`;
    grid.innerHTML = categoryTools.map((tool, index) => createToolCard(tool, index)).join('');
}

function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const noFavorites = document.getElementById('noFavorites');
    
    const favoriteTools = getAllTools().filter(tool => favorites.includes(tool.id));
    
    if (favoriteTools.length === 0) {
        grid.classList.add('hidden');
        noFavorites.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        noFavorites.classList.add('hidden');
        grid.innerHTML = favoriteTools.map((tool, index) => createToolCard(tool, index)).join('');
    }
}

function renderHistory() {
    const grid = document.getElementById('historyGrid');
    const noHistory = document.getElementById('noHistory');
    
    const historyTools = history.map(id => getAllTools().find(t => t.id === id)).filter(Boolean);
    
    if (historyTools.length === 0) {
        grid.classList.add('hidden');
        noHistory.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        noHistory.classList.add('hidden');
        grid.innerHTML = historyTools.map((tool, index) => createToolCard(tool, index)).join('');
    }
}

function getAllTools() {
    const allTools = [];
    Object.keys(tools).forEach(category => {
        tools[category].forEach(tool => {
            allTools.push(tool);
        });
    });
    return allTools;
}

function toggleFavorite(toolId) {
    const index = favorites.indexOf(toolId);
    if (index === -1) {
        favorites.push(toolId);
        showToast('已添加到收藏 ⭐');
    } else {
        favorites.splice(index, 1);
        showToast('已取消收藏');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderAllGrids();
}

function addToHistory(toolId) {
    history = history.filter(id => id !== toolId);
    history.unshift(toolId);
    history = history.slice(0, 20);
    localStorage.setItem('history', JSON.stringify(history));
    renderHistory();
}

function renderAllGrids() {
    renderHotTools();
    renderOfficeTools();
    renderLifeTools();
    renderDevTools();
    renderImageTools();
    renderFavorites();
}

function initEventListeners() {
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterByCategoryName(category);
        });
    });
    
    document.getElementById('categoryGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const categoryId = card.dataset.category;
            showCategoryItems(categoryId);
        }
    });
    
    document.getElementById('clearFilter').addEventListener('click', () => {
        document.getElementById('filterResults').classList.add('hidden');
        document.getElementById('categoryGrid').classList.remove('hidden');
    });
    
    document.getElementById('clearHistory').addEventListener('click', () => {
        if (confirm('确定要清空使用历史吗？')) {
            history = [];
            localStorage.setItem('history', JSON.stringify(history));
            renderHistory();
            showToast('使用历史已清空');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-btn')) {
            const toolId = e.target.dataset.id;
            toggleFavorite(toolId);
        }
        
        if (e.target.classList.contains('use-btn')) {
            const url = e.target.dataset.url;
            const toolId = e.target.dataset.id;
            addToHistory(toolId);
            window.open(url, '_blank');
        }
    });
}

function showCategoryItems(categoryId) {
    document.getElementById('categoryGrid').classList.add('hidden');
    document.getElementById('filterResults').classList.remove('hidden');
    renderCategoryItems(categoryId);
    document.getElementById('filterResults').scrollIntoView({ behavior: 'smooth' });
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) {
        showToast('请输入搜索关键词');
        return;
    }
    
    const results = getAllTools().filter(tool => {
        return tool.name.toLowerCase().includes(query) ||
               tool.desc.toLowerCase().includes(query) ||
               tool.tags.some(tag => tag.toLowerCase().includes(query));
    });
    
    if (results.length === 0) {
        showToast('未找到相关工具，换个词试试？');
        return;
    }
    
    document.getElementById('currentCategory').textContent = `🔍 搜索结果: "${query}" · ${results.length} 款`;
    const grid = document.getElementById('categoryItems');
    grid.innerHTML = results.map((tool, index) => createToolCard(tool, index)).join('');
    
    document.getElementById('categoryGrid').classList.add('hidden');
    document.getElementById('filterResults').classList.remove('hidden');
    document.getElementById('filterResults').scrollIntoView({ behavior: 'smooth' });
}

function filterByCategoryName(categoryName) {
    const categoryMap = {
        'image': 'image',
        'office': 'office',
        'code': 'calculator',
        'life': 'qrcode'
    };
    
    const categoryId = categoryMap[categoryName];
    if (categoryId) {
        showCategoryItems(categoryId);
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}