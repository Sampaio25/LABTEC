// Obtenha referência para os elementos do calendário
const monthYearElement = document.getElementById('month-year');
const daysElement = document.querySelector('.days');

// Inicialize o mês e ano atual
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Adicione um ouvinte de evento para os botões de navegação
function navigate(step) {
    currentMonth += step;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
}

// Função para atualizar o calendário com os números dos dias
function updateCalendar() {
    const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date(currentYear, currentMonth, 1));
    monthYearElement.textContent = `${monthName} ${currentYear}`;
    clearDays();
    addDaysToCalendar(currentMonth, currentYear);
}

// Função para limpar os números dos dias anteriores
function clearDays() {
    while (daysElement.firstChild) {
        daysElement.removeChild(daysElement.firstChild);
    }
}

// Função para adicionar os números dos dias ao calendário
function addDaysToCalendar(month, year) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i;
        dayElement.classList.add('day');
        dayElement.addEventListener('click', showAvailableTimes);
        daysElement.appendChild(dayElement);
    }
}

// Função para mostrar os horários disponíveis
function showAvailableTimes(event) {
    const selectedDay = event.target.textContent;

    // Redirecione para a página ava.html com os parâmetros do dia, mês e ano selecionados
    window.location.href = `ava.html?dia=${selectedDay}&mes=${currentMonth + 1}&ano=${currentYear}`;
}

// Função para alterar o cursor para 'pointer' quando o mouse passar por cima
function changeCursor(direction) {
    const button = document.querySelector(`.${direction}-month`);
    button.style.cursor = 'pointer';
}

// Função para redefinir o cursor quando o mouse sair
function resetCursor(direction) {
    const button = document.querySelector(`.${direction}-month`);
    button.style.cursor = 'default';
}

// Chame a função para adicionar os números dos dias e atualizar o calendário
addDaysToCalendar(currentMonth, currentYear);
updateCalendar();