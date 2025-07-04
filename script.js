function scrollToContato() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

function toggleChat() {
  const chat = document.getElementById("chatPopup");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function openWhatsApp() {
  const phoneNumber = "5516993064096";
  const message = encodeURIComponent("Olá, tudo bem? Gostaria de conversar sobre uma situação que estou enfrentando.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Formulário de contato
  const form = document.getElementById("formContato");
  const mensagem = document.getElementById("mensagemConfirmacao");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Validação
    const nome = form.elements[0].value.trim();
    const email = form.elements[1].value.trim();
    const msg = form.elements[3].value.trim();
    
    if (!nome || !email || !msg) {
      mensagem.textContent = "Por favor, preencha todos os campos obrigatórios.";
      mensagem.style.color = "#d32f2f";
      return;
    }
    
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      mensagem.textContent = "Por favor, insira um e-mail válido.";
      mensagem.style.color = "#d32f2f";
      return;
    }
    
    // Simular envio
    mensagem.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    mensagem.style.color = "#197019";
    form.reset();
    
    // Aqui você pode adicionar o código real para enviar o formulário
    // Exemplo com fetch():
    /*
    fetch('seu-endpoint', {
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        email: email,
        mensagem: msg
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      mensagem.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    })
    .catch(error => {
      mensagem.textContent = "Ocorreu um erro. Por favor, tente novamente.";
      mensagem.style.color = "#d32f2f";
    });
    */
  });

  // Animação ao rolar
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-anime]');
    const windowTop = window.scrollY + (window.innerHeight * 0.75);

    elements.forEach((element) => {
      const delay = element.getAttribute('data-anime-delay') || 0;
      
      setTimeout(() => {
        if (windowTop > element.offsetTop) {
          element.classList.add('animate');
        }
      }, delay);
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executa uma vez ao carregar a página

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (menu.classList.contains('active')) {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
        }
      }
    });
  });
});
// Adicione isso dentro do DOMContentLoaded
const sobreSection = document.querySelector('.sobre-section');
const diferencialItems = document.querySelectorAll('.diferencial-item');

const animateSobreSection = () => {
  const sectionTop = sobreSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.75) {
    sobreSection.classList.add('animated');
    
    diferencialItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animated');
      }, index * 150);
    });
    
    // Remove o event listener após a animação ocorrer
   // window.removeEventListener('scroll', animateSobreSection);
  }
};

// Adicione este event listener
//window.addEventListener('scroll', animateSobreSection);
// Execute uma vez no carregamento para verificar se a seção já está visível
//animateSobreSection();
//const handleSubmit = (event) =>{
 // event.preventDEfault();

  //const name = document.querySelector('input[name=text]').value;

  //const email = document.querySelector('input[name=email]').value;
  //const tel = document.querySelector('input[tel=tel]').value;

//const assunto = document.querySelector('input[assunto=text]').value;
  //fetch('https://api.sheetmonkey.io/form/oJrJsdJebpyKJww4mfbbWm',{
   
   // method:'post',
    //headers: {
     // 'Accept':'application/jason',
    //  'Content-Type':'application/jason'
   // },
   // body: JSON.stringify({name:'', email:'', numero:'', assunto:''})
      
  
  
   /// });
//}
 

//document.querySelectorAll('form').addEventLIstener('submit', handleSubmit);//
