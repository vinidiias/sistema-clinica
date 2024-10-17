import styles from './FichaForm.module.css'

import { useState } from 'react'

import Input from '../form/Input'
//import Select from '../form/Select'
//import Submit from '../form/Submit'
import CheckBox from '../form/CheckBox'
import Table from '../form/Table'

const FichaForm = () => {

  const [selectedSchool, setSelectedSchool] = useState(null)
  const [selectedSexo, setSelectedSexo] = useState(null)
  const [selectedTurno, setSelectedTurno] = useState(null)
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(null)
  const [selectedVinculo, setSelectedVinculo] = useState(null)
  const [selectedTypeVinculo, setSelectedTypeVinculo] = useState(null)
  const [selectedCommunity, setSelectedCommunity] = useState(null)
  const [selectedWork, setSelectedWork] = useState(null)
  const [selectedPsycho, setSelectedPsycho] = useState(null)
  const [selectedPsychi, setSelectedPsychi] = useState(null)

  const [showPsychi, setShowPsychi] = useState(false)
  const [showPsycho, setShowPsycho] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [showSetor, setShowSetor] = useState(false)
  const [showCurso, setShowCurso] = useState(false)
  const [showTypeVinculo, setShowTypeVinculo] = useState(false)


  function handlePsychiChange(value) {
    const newPsychi = selectedPsychi === value ? null : value

    setSelectedPsychi(newPsychi)
    handleShowPsychi(newPsychi)
  }

  function handleShowPsychi(currentPsychi){
    if(currentPsychi === 'psychiatric') setShowPsychi(true)
      else setShowPsychi(false)
  }


  function handleShowPsycho(currentPsycho) {
    if(currentPsycho === 'psychological') setShowPsycho(true)
    else setShowPsycho(false)
  }

  function handlePsychoChange(value) {
    const newPsycho = selectedPsycho === value ? null : value

    setSelectedPsycho(newPsycho)
    handleShowPsycho(newPsycho)
  }

  function handleSchoolChange(value) {
    const newSchool = selectedSchool === value ? null : value;
    setSelectedSchool(newSchool);

    handleSetShowCurso(newSchool);
}

function handleShowWork(currentWork) {
  if(currentWork === 'working') setShowWork(true)
  else setShowWork(false)
}

function handleWorkChange(value) {
  const newWork = selectedWork === value ? null : value

  setSelectedWork(newWork)
  handleShowWork(newWork)
}

  function handleCommunityChange(value) {
    const newCommunity = selectedCommunity === value ? null : value

    setSelectedCommunity(newCommunity)
  }

  function handleSexoChange(value) {
    setSelectedSexo(selectedSexo === value ? null : value )
  }

  function handleDayOfWeekChange(value) {
    const newDay = (selectedDayOfWeek === value ? null : value)

    setSelectedDayOfWeek(newDay)
  }

  function handleTurnoChange(value) {
    const newTurno = selectedTurno === value ? null : value;

    setSelectedTurno(newTurno)
  }

  function handleVinculoChange(value) {
    const newVinculo = selectedVinculo === value ? null : value;

    setSelectedVinculo(newVinculo)
    handleSetShowTypeVinculo(newVinculo)
  }

  function handleTypeVinculoChange(value) {
    const newtTypeVinculo = selectedTypeVinculo === value ? null : value;

    setSelectedTypeVinculo(newtTypeVinculo)
    handleSetShowSetor(newtTypeVinculo)
  }

  function handleSetShowSetor(currentSetor) {
    if (currentSetor === 'Agente') {
      setShowSetor(true);
    } else {
      setShowSetor(false);
    }
  }

  function handleSetShowTypeVinculo(currentVinculo) {
    if (currentVinculo !== null) {
      setShowTypeVinculo(true);
    } else {
      setShowTypeVinculo(false);
    }
  }

  function handleSetShowCurso(currentSchool) {
    if (currentSchool === "Graduação" || currentSchool === "Pós Graduação") {
      setShowCurso(true);
    } else {
      setShowCurso(false);
    }
  }
    return (
      <form className={styles.ficha_form}>
        <div>
          <Input
            id="name"
            type="text"
            name="name"
            text="Nome"
            autoComplete="username"
            customClass="flex_1"
          />
        </div>
        <div className={styles.flex}>
          <Input id="age" type="number" name="age" text="Idade" />
          <Input id="date" type="date" name="date" text="Data de Nascimento" />
          <div className={styles.sex}>
            <CheckBox
              isSelected={selectedSexo === "F"}
              id="sexo"
              name="sexo"
              value="F"
              label="sexoF"
              textLabel="( )F"
              handleOnChange={handleSexoChange}
              customClass="title"
            />
            <CheckBox
              isSelected={selectedSexo === "M"}
              id="sexo"
              name="sexo"
              value="M"
              label="SexoM"
              textLabel="( )M"
              handleOnChange={handleSexoChange}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <Input id="ra" type="number" name="ra" text="RA" />
          <Input id="cpf" type="text" name="cpf" text="CPF" />
        </div>
        <div className={styles.flex}>
          <Input
            type="number"
            name="tel"
            text="Telefone ( )"
            autoComplete="tel"
          />
          <Input type="email" name="email" text="Email" autoComplete="email" />
        </div>
        <div className={styles.flex}>
          <Input
            type="text"
            name="adress"
            text="Endereço"
            autoComplete="adress"
          />
          <Input type="number" name="AdressNumber" text="Número" />
        </div>
        <Input type="text" name="work" text="Profissão" customClass="flex_1" />
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="education" className={styles.label}>
            Escolaridade:
          </label>
          <div>
            <CheckBox
              isSelected={selectedSchool === "Fundamental I"}
              id="education-1"
              name="education"
              text="Fundamental I"
              value="Fundamental I"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Fundamental II"}
              id="education-2"
              name="education"
              text="Fundamental II"
              value="Fundamental II"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Ensino Médio"}
              id="education-3"
              name="education"
              text="Ensino Médio"
              value="Ensino Médio"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Ensino Técnico"}
              id="education-4"
              name="education"
              text="Ensino Técnico"
              value="Ensino Técnico"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Graduação"}
              id="education-5"
              name="education"
              text="Graduação"
              value="Graduação"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Pós Graduação"}
              id="education-6"
              name="education"
              text="Pós Graduação"
              value="Pós Graduação"
              handleOnChange={handleSchoolChange}
            />
            {showCurso && (
              <div style={{ marginTop: "1em" }}>
                <div className={styles.flex}>
                  <Input type="text" name="curso" text="Curso" />
                  <Input type="text" name="periodo" text="Ano/período" />
                </div>
                <div className={styles.flex}>
                  <label htmlFor="course" className={styles.label}>
                    Turno do seu curso:
                  </label>
                  <CheckBox
                    selected={selectedTurno === "Manhã"}
                    id="course-1"
                    value="Manhã"
                    name="course"
                    text="Manhã"
                    handleOnChange={handleTurnoChange}
                  />
                  <CheckBox
                    selected={selectedTurno === "Tarde"}
                    id="course-2"
                    value="Tarde"
                    name="course"
                    text="Tarde"
                    handleOnChange={handleTurnoChange}
                  />
                  <CheckBox
                    selected={selectedTurno === "Noite"}
                    id="course-3"
                    value="Noite"
                    name="course"
                    text="Noite"
                    handleOnChange={handleTurnoChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <Table
            selected={selectedDayOfWeek}
            handleChange={handleDayOfWeekChange}
          />
        </div>
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <CheckBox
            selected={selectedVinculo === "Vínculo com Unioeste"}
            id="vinculo"
            value="Vínculo com Unioeste"
            name="vinculo_unioeste"
            handleOnChange={handleVinculoChange}
            label="vinculo_unioeste"
            textLabel="Vínculo com Unioeste:"
          />
          {showTypeVinculo && (
            <div className={styles.flex}>
              <Input
                customClass="marginBottom_zero light"
                isSelected={selectedTypeVinculo === "Docente"}
                handleOnChange={() => {
                  handleTypeVinculoChange("Docente");
                }}
                id="vinculo-1"
                type="checkbox"
                name="vinculo_unioeste"
                title="Docente"
                value="Docente"
              />
              <Input
                customClass="marginBottom_zero light"
                isSelected={selectedTypeVinculo === "Agente"}
                handleOnChange={() => {
                  handleTypeVinculoChange("Agente");
                }}
                id="vinculo-2"
                type="checkbox"
                name="vinculo_unioeste"
                title="Agente"
                value="Agente"
              />
              <Input
                customClass="marginBottom_zero light"
                isSelected={selectedTypeVinculo === "Acadêmico"}
                handleOnChange={() => {
                  handleTypeVinculoChange("Acadêmico");
                }}
                id="vinculo-3"
                type="checkbox"
                name="vinculo_unioeste"
                title="Acadêmico"
                value="Acadêmico"
              />
              <Input
                customClass="marginBottom_zero light"
                isSelected={selectedTypeVinculo === "Estagiário"}
                handleOnChange={() => {
                  handleTypeVinculoChange("Estagiário");
                }}
                id="vinculo-4"
                type="checkbox"
                name="vinculo_unioeste"
                title="Estagiário"
                value="Estagiário"
              />
            </div>
          )}
        </div>
        {showSetor && (
          <div>
            <Input
              id="1"
              type="text"
              name="setor"
              text="Setor que trabalha"
              customClass="flex_1"
            />
          </div>
        )}
        <div style={{ marginBottom: "1em" }}>
          <CheckBox
            name="community"
            text="Comunidade Externa"
            customClass="bold"
            selected={selectedCommunity}
            handleOnChange={handleCommunityChange}
          />
        </div>
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="work" className={styles.label}>
            Você trabalha?
          </label>
          <CheckBox
            selected={selectedWork}
            handleOnChange={handleWorkChange}
            name="not_work"
            text="( ) Não"
          />
          <CheckBox
            selected={selectedWork}
            handleOnChange={handleWorkChange}
            name="working"
            text="( ) Sim"
          />
        </div>
        {showWork && (
          <div>
            <Input
              type="time"
              name="working"
              text="Trabalha em qual horário?"
            />
          </div>
        )}
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="psychological" className={styles.label}>
            Já realizou algum acompanhamento psicológico?
          </label>
          <CheckBox
            selected={selectedPsycho}
            handleOnChange={handlePsychoChange}
            name="not_psychological"
            text="( ) Não"
          />
          <CheckBox
            selected={selectedPsycho}
            handleOnChange={handlePsychoChange}
            name="psychological"
            text="( ) Sim"
          />
        </div>
        {showPsycho && (
          <div>
            <Input
              type="text"
              name="following_psycho"
              text="Por quanto tempo acompanhamento psicológico?"
            />
          </div>
        )}

        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="psychiatric" className={styles.label}>
            Já realizou algum acompanhamento psiquiátrico?
          </label>
          <CheckBox
            selected={selectedPsychi}
            handleOnChange={handlePsychiChange}
            name="not_psychiatric"
            text="( ) Não"
          />
          <CheckBox
            selected={selectedPsychi}
            handleOnChange={handlePsychiChange}
            name="psychiatric"
            text="( ) Sim"
          />
        </div>
        {showPsychi && (
          <div>
            <Input
              type="text"
              name="following_psychi"
              text="Por quanto tempo fez acompanhamento psiquiátrico?"
            />
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="observation" className={styles.label}>
            Observações que considere importante:
          </label>
          <textarea name="observation" id="observation" rows="7"></textarea>
        </div>
      </form>
    );
}

export default FichaForm