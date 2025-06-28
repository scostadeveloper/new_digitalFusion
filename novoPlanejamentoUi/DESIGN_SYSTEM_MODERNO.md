# 🎨 Design System Moderno - Digital Fusion

## 🌈 Paleta de Cores Expandida

### **Cores Primárias (Mantidas)**
```css
:root {
  /* Cores da marca */
  --df-black: #000000;
  --df-blue: #007BFF;
  --df-cyan: #005F73;
  --df-gray: #F0F0F0;
  --df-white: #FFFFFF;
}
```

### **Cores Neon & Glow (Novas)**
```css
:root {
  /* Efeitos Neon */
  --neon-blue: #00F5FF;
  --neon-purple: #8A2BE2;
  --neon-green: #39FF14;
  --electric-blue: #7DF9FF;
  --cyber-pink: #FF1493;
  --plasma-orange: #FF6600;
  
  /* Glassmorphism */
  --glass-white: rgba(255, 255, 255, 0.1);
  --glass-blue: rgba(0, 123, 255, 0.1);
  --glass-dark: rgba(0, 0, 0, 0.2);
  --glass-cyan: rgba(0, 95, 115, 0.15);
  
  /* Shadows & Glows */
  --shadow-neon-blue: 0 0 20px rgba(0, 245, 255, 0.5);
  --shadow-neon-purple: 0 0 20px rgba(138, 43, 226, 0.5);
  --shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.37);
  --shadow-deep: 0 25px 50px rgba(0, 0, 0, 0.25);
}
```

### **Gradientes Modernos**
```css
:root {
  /* Gradientes Primários */
  --gradient-primary: linear-gradient(135deg, #007BFF 0%, #005F73 100%);
  --gradient-neon: linear-gradient(45deg, #00F5FF 0%, #8A2BE2 100%);
  --gradient-cyber: linear-gradient(90deg, #FF1493 0%, #00F5FF 50%, #39FF14 100%);
  
  /* Gradientes Glass */
  --gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  --gradient-glass-blue: linear-gradient(135deg, rgba(0,123,255,0.1) 0%, rgba(0,95,115,0.1) 100%);
  
  /* Gradientes Radiais */
  --radial-glow: radial-gradient(circle, rgba(0,245,255,0.2) 0%, transparent 70%);
  --radial-spotlight: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%);
}
```

---

## 🔤 Tipografia Futurística

### **Fontes Atualizadas**
```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

:root {
  /* Fontes Futurísticas */
  --font-cyber: 'Orbitron', monospace;        /* Para títulos tech */
  --font-modern: 'Rajdhani', sans-serif;      /* Para corpo moderno */
  --font-code: 'Space Mono', monospace;       /* Para elementos code */
  --font-clean: 'Inter', sans-serif;          /* Para textos limpos */
}
```

### **Hierarchy & Sizes**
```css
.text-cyber-xl { font-family: var(--font-cyber); font-size: 4rem; font-weight: 900; }
.text-cyber-lg { font-family: var(--font-cyber); font-size: 2.5rem; font-weight: 700; }
.text-modern-lg { font-family: var(--font-modern); font-size: 2rem; font-weight: 600; }
.text-code { font-family: var(--font-code); font-size: 0.875rem; }
```

---

## 🎭 Componentes Glass & Neon

### **Glass Cards**
```css
.glass-card {
  background: var(--gradient-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: var(--shadow-glass);
}

.glass-card-blue {
  background: var(--gradient-glass-blue);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 123, 255, 0.3);
}
```

### **Neon Buttons**
```css
.neon-button {
  background: transparent;
  border: 2px solid var(--neon-blue);
  color: var(--neon-blue);
  text-transform: uppercase;
  font-family: var(--font-cyber);
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.neon-button:hover {
  color: var(--df-black);
  box-shadow: var(--shadow-neon-blue);
  text-shadow: none;
}

.neon-button:hover::before {
  transform: translateX(0);
}

.neon-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--neon-blue);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: -1;
}
```

### **3D Hover Effects**
```css
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.card-3d:hover {
  transform: rotateY(10deg) rotateX(10deg) translateZ(20px);
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(2deg); }
  66% { transform: translateY(10px) rotate(-2deg); }
}
```

---

## ⚡ Animações & Transições

### **Entrance Animations**
```css
@keyframes slideInFromLeft {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes glitchIn {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes neonPulse {
  0%, 100% { text-shadow: 0 0 5px currentColor; }
  50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
}
```

### **Loading States**
```css
.loading-dots::after {
  content: '';
  animation: dots 1.5s steps(5, end) infinite;
}

@keyframes dots {
  0%, 20% { content: ''; }
  40% { content: '.'; }
  60% { content: '..'; }
  80%, 100% { content: '...'; }
}
```

---

## 🌟 Interactive Elements

### **Magnetic Hover Effect**
```css
.magnetic {
  transition: transform 0.2s ease;
  cursor: pointer;
}

.magnetic:hover {
  transform: translate(var(--mouse-x, 0), var(--mouse-y, 0));
}
```

### **Hologram Effect**
```css
.hologram {
  background: linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.3) 50%, transparent 70%);
  background-size: 200% 200%;
  animation: hologram-sweep 3s ease-in-out infinite;
}

@keyframes hologram-sweep {
  0% { background-position: -200% -200%; }
  50% { background-position: 200% 200%; }
  100% { background-position: -200% -200%; }
}
```

---

## 📐 Layout Grid Moderno

### **Asymmetric Grid**
```css
.modern-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  min-height: 100vh;
}

.diagonal-section {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background: var(--gradient-primary);
  padding: 4rem 0;
}
```

### **Floating Containers**
```css
.floating-container {
  position: relative;
  z-index: 10;
  transform: translateY(-50px);
  background: var(--gradient-glass);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: var(--shadow-glass);
}
```

---

## 🎮 Gaming UI Elements

### **Progress Bars Animadas**
```css
.tech-progress {
  width: 100%;
  height: 8px;
  background: rgba(0, 123, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.tech-progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--progress, 0%);
  background: var(--gradient-neon);
  border-radius: 4px;
  transition: width 2s ease;
}

.tech-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

### **Glitch Text Effect**
```css
.glitch {
  position: relative;
  font-family: var(--font-cyber);
  font-weight: 900;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-1 0.5s infinite;
  color: var(--neon-blue);
  z-index: -1;
}

.glitch::after {
  animation: glitch-2 0.5s infinite;
  color: var(--cyber-pink);
  z-index: -2;
}

@keyframes glitch-1 {
  0%, 14%, 15%, 49%, 50%, 99%, 100% { transform: translate(0); }
  15%, 49% { transform: translate(-2px, -2px); }
}

@keyframes glitch-2 {
  0%, 20%, 21%, 62%, 63%, 99%, 100% { transform: translate(0); }
  21%, 62% { transform: translate(2px, 2px); }
}
```

---

Este design system fornece a base para criar uma experiência verdadeiramente futurística e moderna! 🚀
