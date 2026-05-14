class TotoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    padding: 2.5rem;
                    background-color: var(--card-bg);
                    border-radius: 15px;
                    box-shadow: 0 10px 30px var(--shadow-color);
                    transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
                }
                #number-display {
                    font-size: 3rem;
                    font-weight: bold;
                    margin: 2rem 0;
                    color: var(--text-color);
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                .number-circle {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background-color: var(--circle-bg);
                    color: var(--text-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 4px 8px var(--shadow-color);
                    transition: transform 0.3s ease, background-color var(--transition-speed), color var(--transition-speed);
                    animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards;
                }
                .number-circle:hover {
                    transform: scale(1.1);
                }
                @keyframes popIn {
                    0% { transform: scale(0); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                button {
                    background-color: var(--primary-color);
                    border: none;
                    color: white;
                    padding: 18px 40px;
                    text-align: center;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-top: 1rem;
                    cursor: pointer;
                    border-radius: 50px;
                    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
                    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
                }
                button:hover {
                    background-color: var(--primary-hover);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
                }
                button:active {
                    transform: translateY(0);
                }
            </style>
            <div id="number-display"></div>
            <button id="generate-btn">Generate Numbers</button>
        `;

        this.numberDisplay = this.shadowRoot.querySelector('#number-display');
        this.generateBtn = this.shadowRoot.querySelector('#generate-btn');

        this.generateBtn.addEventListener('click', this.generateTotoNumbers.bind(this));
    }

    generateTotoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 49) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        this.numberDisplay.innerHTML = '';
        sortedNumbers.forEach((number, index) => {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.style.animationDelay = `${index * 0.1}s`;
            circle.textContent = number;
            this.numberDisplay.appendChild(circle);
        });
    }
}

customElements.define('toto-generator', TotoGenerator);

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    
    themeToggle.textContent = isLightMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});
