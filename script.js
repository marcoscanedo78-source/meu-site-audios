// Navegação mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Player de áudio demo
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('demo-audio');
const progressBar = document.querySelector('.progress');

if (playBtn && audio) {
    let isPlaying = false;

    playBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
        } else {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
        }
    });

    audio.addEventListener('timeupdate', function() {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';
        }
    });

    audio.addEventListener('ended', function() {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.style.width = '0%';
        isPlaying = false;
    });
}

// Função de compra (integrar com seu sistema de pagamento)
function comprarProduto(produto) {
    // Aqui você integraria com sua plataforma de pagamento
    // Por exemplo: PagSeguro, PayPal, Stripe, etc.

    const produtos = {
        'pack-aprovacao': {
            name: 'Pack Aprovação Total',
            price: 97.00,
            id: 'pack_001'
        },
        'relaxamento': {
            name: 'Relaxamento Profundo',
            price: 47.00,
            id: 'relax_001'
        },
        'mente-genial': {
            name: 'Mente Genial',
            price: 67.00,
            id: 'genial_001'
        }
    };

    const produtoSelecionado = produtos[produto];

    if (produtoSelecionado) {
        // Exemplo de redirecionamento para página de pagamento
        // Substitua pela sua URL de checkout
        alert(`Redirecionando para pagamento do produto: ${produtoSelecionado.name} - R$ ${produtoSelecionado.price}`);

        // Exemplo de integração com PagSeguro (substitua pelos seus dados)
        /*
        window.location.href = `https://pagseguro.uol.com.br/checkout/v2/payment.html?` +
            `itemId=${produtoSelecionado.id}&` +
            `itemDescription=${encodeURIComponent(produtoSelecionado.name)}&` +
            `itemAmount=${produtoSelecionado.price.toFixed(2)}`;
        */

        // Ou para WhatsApp
        const mensagem = `Olá! Tenho interesse no produto ${produtoSelecionado.name} por R$ ${produtoSelecionado.price}. Podem me ajudar com a compra?`;
        const whatsappURL = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappURL, '_blank');
    }
}

// Animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.benefit-card, .product-card, .testimonial-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contador de visitantes (simulado)
function atualizarContadorVisitantes() {
    const contador = localStorage.getItem('visitantes') || Math.floor(Math.random() * 1000) + 5000;
    const novoContador = parseInt(contador) + Math.floor(Math.random() * 3) + 1;
    localStorage.setItem('visitantes', novoContador);

    // Você pode exibir esse contador em algum lugar do site
    console.log(`Visitantes hoje: ${novoContador}`);
}

// Header com efeito de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Inicializar contador ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarContadorVisitantes);
