// --- Dados Base com Alergénios ---
const defaultBaskets = [
    { id: 1, nome: "Cabaz Surpresa Alimentar", parceiro: "Pingo Doce", preco: 3.99, precoOriginal: 12.00, desconto: "-67%", poupado: "8.01€", stock: 4, categoria: "Alimentação", horario: "Hoje, 18h–20h", avaliacao: 4.6, numAvaliacoes: 88, descricao: "Cabaz surpresa com produtos alimentares frescos próximos do prazo de validade. Inclui legumes, fruta e produtos de mercearia.", imagem: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: ["Glúten", "Soja"] },
    { id: 2, nome: "Misto de Padaria Diário", parceiro: "Padaria São João", preco: 2.50, precoOriginal: 8.00, desconto: "-69%", poupado: "5.50€", stock: 3, categoria: "Padaria", horario: "Hoje, 19h–21h", avaliacao: 4.8, numAvaliacoes: 124, descricao: "Pão fresco que sobrou do dia, bolos sortidos e salgados.", imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: ["Glúten", "Ovos", "Lactose"] },
    { id: 3, nome: "Refeição Completa", parceiro: "Restaurante Verde", preco: 4.50, precoOriginal: 10.00, desconto: "-55%", poupado: "5.50€", stock: 2, categoria: "Feitos", horario: "Amanhã, 12h–14h", avaliacao: 4.9, numAvaliacoes: 45, descricao: "Sobra de refeições preparadas no dia. Pode incluir pratos de carne ou vegetarianos.", imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: ["Glúten", "Lactose", "Ovos", "Soja"] },
    { id: 4, nome: "Pack Higiene Eco", parceiro: "Farmácia Saúde+", preco: 5.00, precoOriginal: 15.00, desconto: "-66%", poupado: "10.00€", stock: 5, categoria: "Higiene", horario: "Hoje, 14h–19h", avaliacao: 4.5, numAvaliacoes: 32, descricao: "Produtos de higiene pessoal com embalagens ligeiramente danificadas.", imagem: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: [] },
    { id: 5, nome: "Cabaz Fruta Imperfeita", parceiro: "Pingo Doce", preco: 2.99, precoOriginal: 7.50, desconto: "-60%", poupado: "4.51€", stock: 6, categoria: "Alimentação", horario: "Hoje, 17h–20h", avaliacao: 4.3, numAvaliacoes: 15, descricao: "Fruta fresca, deliciosa, mas com pequenos defeitos estéticos. Ideal para sumos.", imagem: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: [] },
    { id: 6, nome: "Sortido Doçaria", parceiro: "Padaria São João", preco: 3.50, precoOriginal: 9.00, desconto: "-61%", poupado: "5.50€", stock: 1, categoria: "Padaria", horario: "Hoje, 19h–21h", avaliacao: 4.7, numAvaliacoes: 67, descricao: "Uma seleção dos melhores doces conventuais que não foram vendidos durante o dia.", imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: ["Glúten", "Ovos", "Lactose", "Frutos secos"] },
    { id: 7, nome: "Cabaz de Legumes Bio", parceiro: "Feira da Terra", preco: 4.00, precoOriginal: 10.00, desconto: "-60%", poupado: "6.00€", stock: 8, categoria: "Alimentação", horario: "Hoje, 16h–19h", avaliacao: 4.4, numAvaliacoes: 23, descricao: "Legumes biológicos com pequenas imperfeições. Frescos e saborosos.", imagem: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: [] },
    { id: 8, nome: "Cabaz de Pão e Bolos", parceiro: "Padaria do Bairro", preco: 2.80, precoOriginal: 7.00, desconto: "-60%", poupado: "4.20€", stock: 5, categoria: "Padaria", horario: "Hoje, 19h–21h", avaliacao: 4.9, numAvaliacoes: 56, descricao: "Variedade de pães e bolos do dia que não foram vendidos.", imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: ["Glúten", "Ovos", "Lactose"] },
    { id: 9, nome: "Cabaz de Sushi", parceiro: "Sushi House", preco: 6.50, precoOriginal: 18.00, desconto: "-64%", poupado: "11.50€", stock: 2, categoria: "Feitos", horario: "Hoje, 20h–22h", avaliacao: 4.7, numAvaliacoes: 41, descricao: "Sushi fresco preparado no dia. Pode conter peixe, vegetais e arroz.", imagem: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alergenos: ["Peixe", "Marisco", "Soja"] }
];
const mockPartners = [
    { nome: "Pingo Doce", dist: "0.3 km", img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { nome: "Padaria São João", dist: "0.7 km", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { nome: "Restaurante Verde", dist: "1.1 km", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { nome: "Farmácia Saúde+", dist: "1.4 km", img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
];

let currentUser = null, users = [], orders = [], cart = [], baskets = [];
let currentCategory = 'Todas', currentPartnerFilter = null, viewBasketId = null, viewBasketQty = 1;
let isRendering = false;

// --- Inicialização com FORCE UPDATE dos cabazes ---
window.onload = () => {
    try {
        users = JSON.parse(localStorage.getItem('lastcall_users')) || [];
        orders = JSON.parse(localStorage.getItem('lastcall_orders')) || [];
        cart = JSON.parse(localStorage.getItem('lastcall_cart')) || [];
        
        // FORÇAR usar os novos cabazes com alergénios, sobrescrevendo qualquer versão antiga
        baskets = [...defaultBaskets];
        localStorage.setItem('lastcall_baskets', JSON.stringify(baskets));
        
        // Corrigir PINs antigos
        let changed = false;
        orders.forEach(o => { if (!o.pin || o.pin === "****") { o.pin = Math.floor(1000 + Math.random() * 9000).toString(); changed = true; } });
        if (changed) localStorage.setItem('lastcall_orders', JSON.stringify(orders));
        
        currentUser = JSON.parse(localStorage.getItem('lastcall_currentUser'));
        if (currentUser) showApp();
        else showView('auth-view');
        setupRealtimeValidation();
    } catch(e) { console.error(e); localStorage.clear(); location.reload(); }
};

function saveData() {
    localStorage.setItem('lastcall_users', JSON.stringify(users));
    localStorage.setItem('lastcall_orders', JSON.stringify(orders));
    localStorage.setItem('lastcall_cart', JSON.stringify(cart));
    localStorage.setItem('lastcall_baskets', JSON.stringify(baskets));
    if (currentUser) localStorage.setItem('lastcall_currentUser', JSON.stringify(currentUser));
}

// --- Validação em tempo real ---
function setupRealtimeValidation() {
    const fields = [
        { id: 'reg-name', errorId: 'reg-name-error', validate: v => v.trim().length >= 3, msg: 'Mínimo 3 caracteres' },
        { id: 'reg-email', errorId: 'reg-email-error', validate: v => /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(v) && !users.find(u => u.email === v), msg: 'Email inválido ou já registado' },
        { id: 'reg-phone', errorId: 'reg-phone-error', validate: v => /^\d{9}$/.test(v), msg: 'Telemóvel com 9 dígitos' },
        { id: 'reg-password', errorId: 'reg-password-error', validate: v => v.length >= 6, msg: 'Mínimo 6 caracteres' },
        { id: 'login-email', errorId: 'login-email-error', validate: v => /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(v), msg: 'Email inválido' }
    ];
    fields.forEach(f => {
        const input = document.getElementById(f.id);
        if (!input) return;
        input.addEventListener('input', () => {
            const errorDiv = document.getElementById(f.errorId);
            const isValid = f.validate(input.value);
            if (!isValid && input.value.length > 0) {
                input.classList.add('is-invalid'); input.classList.remove('is-valid');
                errorDiv.innerText = f.msg; errorDiv.classList.add('visible');
            } else if (isValid || input.value.length === 0) {
                input.classList.add('is-valid'); input.classList.remove('is-invalid');
                errorDiv.classList.remove('visible');
            }
        });
    });
}

// --- Autenticação ---
function switchAuthTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.add('hidden'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.getElementById(`${tab}-form`).classList.remove('hidden');
}
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const password = document.getElementById('reg-password').value;
    if (users.find(u => u.email === email)) return showToast("Email já registado!", "error");
    const memberSince = new Date().toLocaleString('pt-PT', { month: 'short', year: 'numeric' }).replace(/ de /g, ' ').replace(/^./, l => l.toUpperCase());
    currentUser = { name, email, phone, password, memberSince, preferences: { alergias: [], dietas: [] } };
    users.push(currentUser); saveData(); showApp();
});
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;
    const user = users.find(u => u.email === email && u.password === pass);
    if (user) {
        currentUser = user;
        if (!currentUser.memberSince) {
            currentUser.memberSince = new Date().toLocaleString('pt-PT', { month: 'short', year: 'numeric' }).replace(/ de /g, ' ').replace(/^./, l => l.toUpperCase());
            const idx = users.findIndex(u => u.email === email); if (idx !== -1) users[idx] = currentUser;
        }
        saveData(); showApp();
    } else showToast("Email ou palavra-passe incorretos.", "error");
});
function logout() { currentUser = null; localStorage.removeItem('lastcall_currentUser'); document.getElementById('main-header').classList.add('hidden'); document.getElementById('bottom-nav').classList.add('hidden'); showView('auth-view'); }
function showApp() { document.getElementById('main-header').classList.remove('hidden'); document.getElementById('bottom-nav').classList.remove('hidden'); document.getElementById('header-avatar').innerText = currentUser.name.charAt(0).toUpperCase(); updateCartBadge(); showView('home-view'); }

// --- Navegação ---
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-item-desktop').forEach(b => b.classList.remove('active'));
    const mapMob = { 'home-view': 'nav-home', 'cart-view': 'nav-cart', 'orders-view': 'nav-orders', 'profile-view': 'nav-profile' };
    const mapDesk = { 'home-view': 'desk-nav-home', 'cart-view': 'desk-nav-cart', 'orders-view': 'desk-nav-orders', 'profile-view': 'desk-nav-profile' };
    if (mapMob[viewId]) document.getElementById(mapMob[viewId]).classList.add('active');
    if (mapDesk[viewId]) document.getElementById(mapDesk[viewId]).classList.add('active');
    if (viewId === 'profile-view') loadProfileData();
    if (viewId === 'home-view') { renderPartners(); renderBaskets(); }
    if (viewId === 'cart-view') renderCart();
    if (viewId === 'orders-view') renderOrders();
}

// --- Home e Catálogo ---
function renderPartners() { const c = document.getElementById('partners-container'); if(c) c.innerHTML = mockPartners.map(p => `<div class="partner-card" onclick="filterByPartner('${p.nome}')"><img src="${p.img}" class="partner-img"><span class="partner-name">${p.nome}</span><span class="partner-dist">${p.dist}</span></div>`).join(''); }
function filterByPartner(nome) { currentPartnerFilter = nome; document.getElementById('baskets-title').innerText = `Ofertas de ${nome}`; renderBaskets(); }
function resetFilters() { currentPartnerFilter = null; currentCategory = 'Todas'; document.getElementById('search-bar').value = ''; document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active')); document.querySelector('.cat-btn').classList.add('active'); document.getElementById('baskets-title').innerText = `Cabazes Disponíveis`; renderBaskets(); }
function setCategory(cat) { currentCategory = cat; document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active')); event.currentTarget.classList.add('active'); renderBaskets(); }
function renderBaskets() { if (isRendering) return; isRendering = true; const term = document.getElementById('search-bar')?.value.toLowerCase() || ''; let filtered = baskets.filter(b => b.stock > 0); if (term) filtered = filtered.filter(b => b.nome.toLowerCase().includes(term) || b.parceiro.toLowerCase().includes(term)); if (currentPartnerFilter) filtered = filtered.filter(b => b.parceiro === currentPartnerFilter); if (currentCategory !== 'Todas') filtered = filtered.filter(b => b.categoria === currentCategory); const container = document.getElementById('baskets-container'); if (container) { document.getElementById('results-count').innerText = `${filtered.length} resultados`; container.innerHTML = filtered.map(b => `<div class="card fade-in" onclick="openBasketDetail(${b.id})"><div class="card-img-wrapper"><span class="tag-discount">${b.desconto}</span><span class="tag-qty">${b.stock} disponíveis</span><img src="${b.imagem}" class="card-img"></div><div class="card-content"><span class="card-cat">${b.parceiro} • ${b.categoria}</span><h3>${b.nome}</h3><span class="card-rating"><i class="fa-solid fa-star"></i> ${b.avaliacao} <span style="color:var(--text-muted); font-weight:normal;">(${b.numAvaliacoes})</span></span><div class="price-row"><span class="price">${b.preco.toFixed(2)}€</span><span class="price-old">${b.precoOriginal.toFixed(2)}€</span></div></div></div>`).join(''); } isRendering = false; }
function filterBaskets() { renderBaskets(); }

// --- Detalhe do Cabaz (com alergénios) ---
function openBasketDetail(id) {
    const basket = baskets.find(b => b.id === id);
    if(!basket) return;
    viewBasketId = id;
    viewBasketQty = 1;
    document.getElementById('detail-img').src = basket.imagem;
    document.getElementById('detail-discount-tag').innerText = `${basket.desconto} • Poupa ${basket.poupado}`;
    document.getElementById('detail-partner-cat').innerText = `${basket.parceiro.toUpperCase()} • ${basket.categoria.toUpperCase()}`;
    document.getElementById('detail-name').innerText = basket.nome;
    document.getElementById('detail-rating').innerText = basket.avaliacao;
    document.getElementById('detail-reviews').innerText = `(${basket.numAvaliacoes} avaliações)`;
    document.getElementById('detail-time').innerText = basket.horario;
    document.getElementById('detail-stock').innerText = `${basket.stock} cabazes`;
    document.getElementById('detail-description').innerText = basket.descricao;
    document.getElementById('detail-old-price').innerText = `${basket.precoOriginal.toFixed(2)}€`;
    
    // Mostrar alergénios
    const allergenSection = document.getElementById('allergen-section');
    const allergenChips = document.getElementById('allergen-chips');
    if (basket.alergenos && basket.alergenos.length > 0) {
        allergenChips.innerHTML = basket.alergenos.map(a => `<span class="allergen-chip"><i class="fa-solid fa-circle-exclamation"></i> ${a}</span>`).join('');
        allergenSection.style.display = 'block';
    } else {
        allergenSection.style.display = 'none';
    }
    
    updateDetailPrice();
    showView('basket-detail-view');
}
function changeQty(amount) { const basket = baskets.find(b => b.id === viewBasketId); if(viewBasketQty + amount > 0 && viewBasketQty + amount <= basket.stock) { viewBasketQty += amount; updateDetailPrice(); } }
function updateDetailPrice() { const basket = baskets.find(b => b.id === viewBasketId); document.getElementById('detail-qty').innerText = viewBasketQty; document.getElementById('detail-price').innerText = `${(basket.preco * viewBasketQty).toFixed(2)}€`; }
function addCurrentBasketToCart() { const basket = baskets.find(b => b.id === viewBasketId); if (!basket) return; for(let i = 0; i < viewBasketQty; i++) cart.push({ ...basket, cartId: Date.now() + i, userEmail: currentUser.email }); saveData(); updateCartBadge(); showToast(`Adicionado(s) ${viewBasketQty} cabaz(es) ao carrinho!`); showView('home-view'); }

// --- Carrinho ---
function updateCartBadge() { if(!currentUser) return; const len = cart.filter(c => c.userEmail === currentUser.email).length; document.getElementById('cart-badge').innerText = len; document.getElementById('cart-badge-desk').innerText = len; if(len>0) { document.getElementById('cart-badge').classList.remove('hidden'); document.getElementById('cart-badge-desk').classList.remove('hidden'); } else { document.getElementById('cart-badge').classList.add('hidden'); document.getElementById('cart-badge-desk').classList.add('hidden'); } }
function renderCart() { if (isRendering) return; isRendering = true; const userCart = cart.filter(c => c.userEmail === currentUser.email); const container = document.getElementById('cart-items-container'); const empty = document.getElementById('cart-empty'); const footer = document.getElementById('cart-footer'); document.getElementById('cart-count').innerText = `${userCart.length} itens`; if(userCart.length === 0) { if(empty) empty.classList.remove('hidden'); if(container) container.classList.add('hidden'); if(footer) footer.classList.add('hidden'); isRendering=false; return; } if(empty) empty.classList.add('hidden'); if(container) container.classList.remove('hidden'); if(footer) footer.classList.remove('hidden'); let total = 0; container.innerHTML = userCart.map(item => { total += item.preco; return `<div class="card-horizontal fade-in"><div class="card-h-main"><img src="${item.imagem}" class="card-h-img"><div class="card-h-info"><h3>${item.nome}</h3><p class="subtitle" style="margin:0;">${item.parceiro}</p><div class="d-flex justify-content-between mt-2"><span style="font-weight:700; color:var(--dark-green); font-size:1.1rem;">${item.preco.toFixed(2)}€</span><button style="background:none; border:none; color:var(--danger); cursor:pointer; padding:5px; font-size:1.1rem;" onclick="removeFromCart(${item.cartId})"><i class="fa-solid fa-trash"></i></button></div></div></div></div>`; }).join(''); document.getElementById('cart-total').innerText = `${total.toFixed(2)}€`; isRendering=false; }
function removeFromCart(cartId) { cart = cart.filter(c => c.cartId !== cartId); saveData(); updateCartBadge(); renderCart(); }
function checkout() { const userCart = cart.filter(c => c.userEmail === currentUser.email); const total = userCart.reduce((s,i)=>s+i.preco,0); document.getElementById('pay-total-price').innerText = `${total.toFixed(2)}€`; document.getElementById('pay-phone-input').value = currentUser.phone || ''; document.getElementById('payment-modal').classList.remove('hidden'); }
function closePaymentModal() { document.getElementById('payment-modal').classList.add('hidden'); }
function processPayment() { const userCart = cart.filter(c => c.userEmail === currentUser.email); const btn = document.getElementById('btn-confirm-payment'); btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A processar...'; btn.disabled = true; setTimeout(() => { const dataStr = new Date().toLocaleDateString('pt-PT', {day:'2-digit', month:'short', year:'numeric'}).replace(/ de /g, ' '); userCart.forEach((item, idx) => { const pin = Math.floor(1000+Math.random()*9000).toString(); orders.push({ ...item, orderId: Date.now()+idx, status: 'pronto', pin: pin, dataCompra: dataStr }); const bIdx = baskets.findIndex(b=>b.id===item.id); if(bIdx!==-1 && baskets[bIdx].stock>0) baskets[bIdx].stock--; }); cart = cart.filter(c=>c.userEmail!==currentUser.email); saveData(); updateCartBadge(); btn.innerHTML = 'Pagar Agora'; btn.disabled=false; closePaymentModal(); showToast("Pagamento aprovado! Encomendas geradas."); showView('orders-view'); }, 1500); }

// --- Encomendas (PIN visível) ---
function renderOrders() { 
    if (isRendering) return; 
    isRendering = true; 
    const userOrders = orders.filter(o=>o.userEmail===currentUser.email).sort((a,b)=>b.orderId-a.orderId); 
    const container = document.getElementById('orders-container'); 
    document.getElementById('orders-count').innerText = `${userOrders.length} encomendas`; 
    
    container.innerHTML = userOrders.map(o => { 
        const safePin = o.pin && o.pin !== "****" ? o.pin : "----"; 
        const isLevantado = o.status === 'levantado'; 
        const badgeClass = isLevantado ? 'status-levantado' : 'status-pronto'; 
        const badgeText = isLevantado ? 'Levantado' : 'Pronto p/ levantar'; 
        let footerHtml = ''; 
        
        if (isLevantado) {
            footerHtml = `<div class="d-flex align-items-center w-100"><span style="color:var(--medium-green); font-size:0.9rem;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> <span style="color:var(--text-muted); margin-left:5px;">Obrigado pela avaliação!</span></span></div>`; 
        } else {
            // Adicionado o botão "Simular levantamento" no final da div para os cabazes não levantados
            footerHtml = `<div class="d-flex flex-column w-100 gap-2"><span style="color:var(--text-muted); font-size:0.85rem;"><i class="fa-regular fa-clock"></i> Dirige-te ao parceiro para levantar o teu cabaz.</span><div class="pin-display mt-3 mb-2"><span class="pin-label">Código de Levantamento</span><span class="pin-code">${safePin}</span></div><button class="btn-primary w-100 mt-2" onclick="simularLevantamento(${o.orderId})">Simular levantamento</button></div>`; 
        }
        
        return `<div class="card-horizontal fade-in"><div class="card-h-main"><img src="${o.imagem}" class="card-h-img" style="${isLevantado ? 'opacity:0.6; filter: grayscale(50%);' : ''}"><div class="card-h-info"><div class="d-flex justify-content-between align-items-start"><div><h3>${o.nome}</h3><p class="subtitle" style="margin:0; color:var(--medium-green);">${o.parceiro}</p><p class="subtitle" style="font-size:0.75rem;">${o.dataCompra}</p></div><span class="status-badge ${badgeClass}">${badgeText}</span></div><div class="d-flex justify-content-end"><span style="font-weight:700; color:var(--dark-green); font-size:1.1rem;">${o.preco.toFixed(2)}€</span></div></div></div><div class="card-h-footer">${footerHtml}</div></div>`; 
    }).join(''); 
    
    isRendering = false;


// Função para simular o levantamento
    function simularLevantamento(orderId) {
    const orderIndex = orders.findIndex(o => o.orderId === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = 'levantado';
        saveData(); // Atualiza a localStorage
        isRendering = false; // Força a re-renderização
        renderOrders(); // Atualiza a interface
        showToast("Cabaz levantado com sucesso!");
    }
}

// --- Perfil ---
function loadProfileData() { document.getElementById('profile-name').innerText = currentUser.name; document.getElementById('profile-email').innerText = currentUser.email; document.getElementById('profile-date').innerText = currentUser.memberSince || "Mai 2026"; const iniciais = currentUser.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase(); document.getElementById('profile-avatar').innerText = iniciais; document.getElementById('header-avatar').innerText = iniciais; const userOrders = orders.filter(o=>o.userEmail===currentUser.email); let cabazes = userOrders.length; let poupado = userOrders.reduce((s,o)=>s+((o.precoOriginal||0)-o.preco),0); let co2 = userOrders.length*2.5; document.getElementById('stat-cabazes').innerText = cabazes; document.getElementById('stat-poupado').innerText = `${poupado.toFixed(0)}€`; document.getElementById('stat-co2').innerText = `${co2.toFixed(1)}kg`; document.getElementById('edit-name').value = currentUser.name; document.getElementById('edit-phone').value = currentUser.phone || ''; if(!currentUser.preferences) currentUser.preferences = { alergias: [], dietas: [] }; document.querySelectorAll('input[name="alergia"]').forEach(cb => cb.checked = currentUser.preferences.alergias.includes(cb.value)); document.querySelectorAll('input[name="dieta"]').forEach(cb => cb.checked = currentUser.preferences.dietas.includes(cb.value)); }
document.getElementById('preferences-form').addEventListener('submit', (e) => { e.preventDefault(); const newName = document.getElementById('edit-name').value.trim(); const newPhone = document.getElementById('edit-phone').value.trim(); if(newName.length < 3) return showToast("Nome demasiado curto.", "error"); if(!/^\d{9}$/.test(newPhone)) return showToast("O telemóvel tem de ter 9 dígitos.", "error"); currentUser.name = newName; currentUser.phone = newPhone; const alergias = Array.from(document.querySelectorAll('input[name="alergia"]:checked')).map(cb=>cb.value); const dietas = Array.from(document.querySelectorAll('input[name="dieta"]:checked')).map(cb=>cb.value); currentUser.preferences = { alergias, dietas }; const idx = users.findIndex(u=>u.email===currentUser.email); if(idx>-1) users[idx]=currentUser; saveData(); loadProfileData(); showToast("Alterações guardadas com sucesso!"); });
function showToast(msg, type='success') { const c = document.getElementById('toast-container'); const t = document.createElement('div'); t.className = `toast ${type}`; const icon = type==='success' ? 'fa-circle-check' : 'fa-triangle-exclamation'; const color = type==='success' ? 'var(--medium-green)' : 'var(--danger)'; t.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}; font-size: 1.2rem;"></i> <span>${msg}</span>`; c.appendChild(t); setTimeout(() => { t.style.opacity='0'; setTimeout(()=>t.remove(),300); }, 3000); }
