const students = [];

function renderStudents() {
  const list = document.getElementById('students-list');
  list.innerHTML = '';
  if (students.length === 0) {
    list.innerHTML = '<li class="empty">Nenhum estudante cadastrado.</li>';
    return;
  }
  students.forEach(student => {
    const media = ((student.nota1 + student.nota2) / 2).toFixed(2);
    const aprovado = media >= 7;
    const li = document.createElement('li');
    li.className = aprovado ? 'aprovado' : 'reprovado';
    li.innerHTML = `
      <span class="nome">${student.nome}</span>
      <span class="notas">Notas: ${student.nota1}, ${student.nota2}</span>
      <span class="media">Média: ${media}</span>
      <span class="status">${aprovado ? 'Aprovado' : 'Reprovado'}</span>
    `;
    list.appendChild(li);
  });
}

document.getElementById('student-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const nota1 = Number(document.getElementById('nota1').value);
  const nota2 = Number(document.getElementById('nota2').value);
  if (!nome || isNaN(nota1) || isNaN(nota2)) return;
  students.push({ nome, nota1, nota2 });
  renderStudents();
  this.reset();
});

renderStudents();