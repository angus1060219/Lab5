let grades = [];

function addGrade(event) {
  event.preventDefault();
  const math = parseFloat(document.getElementById('mathGrade').value);
  const english = parseFloat(document.getElementById('englishGrade').value);
  if (isNaN(math) || isNaN(english)) {
    alert('Please enter valid numbers.');
    return;
  }
  const average = ((math + english) / 2).toFixed(2);
  grades.push({ math, english, average });
  updateTable();
  calculateAverages();
}

document.getElementById('gradeForm').addEventListener('submit', addGrade);

function updateTable() {
  const tbody = document.querySelector('#gradeTable tbody');
  tbody.innerHTML = '';
  grades.forEach((grade, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${grade.math}</td>
      <td>${grade.english}</td>
      <td>${grade.average}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function calculateAverages() {
  const mathAvg = (
    grades.reduce((sum, grade) => sum + grade.math, 0) / grades.length
  ).toFixed(2);
  const englishAvg = (
    grades.reduce((sum, grade) => sum + grade.english, 0) / grades.length
  ).toFixed(2);
  const overallAvg = (
    grades.reduce((sum, grade) => sum + parseFloat(grade.average), 0) / grades.length
  ).toFixed(2);

  document.getElementById('mathAverage').innerText = mathAvg;
  document.getElementById('englishAverage').innerText = englishAvg;
  document.getElementById('overallAverage').innerText = overallAvg;
}
