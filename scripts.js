
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado");
  let experienceCount = 0;
  let educationCount = 0;
  let abilitieCount = 0;
  let extraCount = 0;
  let languageCount = 0;

  const experiencesDiv = document.getElementById('experiencias');
  const educationDiv = document.getElementById('educacao');
  const abilitieDiv = document.getElementById('abilities');
  const extraDiv = document.getElementById('extra-class');
  const languageDiv = document.getElementById('languages');

  const addButton = document.getElementById('add-experience');
  addButton.addEventListener('click', createExperienceField);

  const addButton2 = document.getElementById('add-education');
  addButton2.addEventListener('click', createEducationField);

  const addButton3 = document.getElementById('add-abilities');
  addButton3.addEventListener('click', createAbilitieField);

  const addButton4 = document.getElementById('add-extra');
  addButton4.addEventListener('click', createExtraClassField);

  const addButton5 = document.getElementById('add-language');
  addButton5.addEventListener('click', createLanguageField);

  function createAbilitieField() {
    abilitieCount++;
    const newAbilitieDiv = document.createElement('div');
    newAbilitieDiv.classList.add('habilidade');

    newAbilitieDiv.innerHTML = ` 
      <input type="text" name="abilitie${abilitieCount}" placeholder="  Exemplo: Liderança, Comunicação...">
    `;

    const removeImage = document.createElement('img');
    removeImage.src = './assets/Junk.svg';
    removeImage.alt = 'Remover';
    removeImage.classList.add('remove-abilitie-image');
    removeImage.addEventListener('click', () => removeAbilitie(newAbilitieDiv));

    newAbilitieDiv.appendChild(removeImage);
    abilitieDiv.appendChild(newAbilitieDiv);
    window.scrollTo(0, 0);
  }

  function createExperienceField() {
    experienceCount++;
    const newExperienceDiv = document.createElement('div');
    newExperienceDiv.classList.add('experience');

    newExperienceDiv.innerHTML = `
      <label for="exp${experienceCount}">Empresa</label>
      <input type="text" name="exp${experienceCount}" placeholder="Nome da empresa">
      <label for="function${experienceCount}">Cargo</label>
      <input type="text" name="function${experienceCount}" placeholder="Cargo">
      <label for="start-of-contract${experienceCount}">Início do contrato</label>
      <input type="month" name="start-of-contract${experienceCount}">
      <label for="end-of-contract${experienceCount}">Término do contrato</label>
      <input type="month" name="end-of-contract${experienceCount}">
      <label for="actual-job${experienceCount}">É meu emprego atual</label>
      <input type="checkbox" name="actual-job${experienceCount}">
      `;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('experience-content');

    contentDiv.innerHTML = ` 
    <input type="text" name="exp-txt${experienceCount}" placeholder="Conte suas atividades nesse cargo">
    `;

    const removeImage = document.createElement('img');
    removeImage.src = './assets/Junk.svg';
    removeImage.alt = 'Remover';
    removeImage.classList.add('remove-experience');
    removeImage.addEventListener('click', () => removeEducation(newExperienceDiv));

    const junkDiv = document.createElement('div');
    junkDiv.classList.add('junkContent');
    junkDiv.appendChild(removeImage);

    newExperienceDiv.appendChild(contentDiv)
    contentDiv.appendChild(junkDiv);
    experiencesDiv.appendChild(newExperienceDiv);
    window.scrollTo(0, 0);
  }


  function createEducationField() {
    educationCount++;
    const newEducationDiv = document.createElement('div');
    newEducationDiv.classList.add('education');

    newEducationDiv.innerHTML = `
      <label for="institute${educationCount}">Instituição</label>
      <input type="text" name="institute${educationCount}" placeholder="Instituição de ensino">
      <label for="degree${educationCount}">Nivel de Formação</label>
      <select name="degree${educationCount}">
      <option value="bacharel">Bacharel</option>
      <option value="licenciatura">Licenciatura</option>
      <option value="tecnico">Técnico</option>
      <option value="pos-graduacao">Pós-Graduação</option>
      <option value="mestrado">Mestrado</option>
      <option value="doutorado">Doutorado</option>
      </select>
      <label for="class${educationCount}">Curso</label>
      <input type"text" name="class${educationCount}" placeholder="Curso">
      `;

    const contentDiv = document.createElement('div');
    newEducationDiv.appendChild(contentDiv);
    contentDiv.classList.add('education-content');

    contentDiv.innerHTML = `

      <label for="start-of-class${educationCount}">Início do curso</label>
      <input type="month" name="start-of-class${educationCount}">
      <label for="end-of-class${educationCount}">Previsão de termino do curso</label>
      <input type="month" name="end-of-class${educationCount}">
      <label for="studyng${educationCount}">Cursando</label>
      <input type="checkbox" name"studyng${educationCount}">
      `;

    const removeImage = document.createElement('img');
    removeImage.src = './assets/Junk.svg';
    removeImage.alt = 'Remover';
    removeImage.classList.add('remove-education');
    removeImage.addEventListener('click', () => removeEducation(newEducationDiv));

    contentDiv.appendChild(removeImage);
    educationDiv.appendChild(newEducationDiv);
    window.scrollTo(0, 0);
  }

  function createExtraClassField() {
    extraCount++;
    const newExtraDiv = document.createElement("div");
    newExtraDiv.classList.add('curso-extra');

    newExtraDiv.innerHTML = `

    <input type"text" name="extra-class-inp${extraCount}" placeholder="   Excel Avançado">
    `;

    const removeImage = document.createElement('img');
    removeImage.src = './assets/Junk.svg';
    removeImage.alt = 'Remover';
    removeImage.classList.add('remove-extra');
    removeImage.addEventListener('click', () => removeAbilitie(newExtraDiv));

    newExtraDiv.appendChild(removeImage);
    extraDiv.appendChild(newExtraDiv);

  }

  function createLanguageField() {
    languageCount++;
    const newLanguageDiv = document.createElement('div');
    newLanguageDiv.classList.add('idioma');

    newLanguageDiv.innerHTML = `
    
      <select name="language${languageCount}">
      <option value="ingles">Inglês</option>
      <option value="espanhol">Espanhol</option>
      <option value="chines">Chines</option>
      <option value="frances">Francês</option>
      <option value="italiano">italiano</option>
      <option value="alemao">Alemão</option>
      </select>
      <select name="language-pro${languageCount}">
      <option value="iniciante">Iniciante</option>
      <option value="intermediario">Intermediario</option>
      <option value="avancado">Avançado</option>
      <option value="fluente">Fluente</option>
      <option value="nativo">Nativo</option>
      </select>
    `;
    const removeImage = document.createElement('img');
    removeImage.src = './assets/Junk.svg';
    removeImage.alt = 'Remover';
    removeImage.classList.add('remove-language');
    removeImage.addEventListener('click', () => removeLanguage(newLanguageDiv));

    newLanguageDiv.appendChild(removeImage);
    languageDiv.appendChild(newLanguageDiv);

    window.scrollTo(0, 0);
  }

  function removeAbilitie(abilitieDiv) {
    abilitieDiv.parentElement.removeChild(abilitieDiv)
  }

  function removeExperience(experienceDiv) {
    experiencesDiv.removeChild(experienceDiv);
  }

  function removeEducation(educationDiv) {
    educationDiv.parentElement.removeChild(educationDiv);
  }

  function removeExtraClass(extraDiv) {
    extraDiv.parentElement.removeChild(extraDiv);
  }

  function removeLanguage(languageDiv) {
    languageDiv.parentElement.removeChild(languageDiv);
  }


});


