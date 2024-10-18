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
  const [input, setInput] = useState('')


  function handlePsychiChange(value) {
    const newPsychi = selectedPsychi === value ? null : value

    setSelectedPsychi(newPsychi)
    handleShowPsychi(newPsychi)
  }

  function handleShowPsychi(currentPsychi){
    if(currentPsychi === 'Sim') setShowPsychi(true)
      else setShowPsychi(false)
  }


  function handleShowPsycho(currentPsycho) {
    if(currentPsycho === 'Sim') setShowPsycho(true)
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
  if(currentWork === 'Trabalha') setShowWork(true)
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

  function handleChange(e) {
    setInput(e.target.value)
  }

    return (
      <form className={styles.ficha_form}>
        <div>
          <Input
            type="text"
            handleOnChange={handleChange}
            name="name"
            text="Nome"
            autoComplete="username"
            customClass="flex_1"
            value={input}
          />
        </div>
        <div className={styles.flex}>
          <div><Input type="number" name="age" text="Idade" /></div>
          <Input type="date" name="date" text="Data de Nascimento" />
          <div className={styles.sex}>
            <label htmlFor="sexo-F" className={styles.label}>
              Sexo:
            </label>
            <CheckBox
              side="right"
              isSelected={selectedSexo === "F"}
              name="sexo"
              value="F"
              text="( )F"
              handleOnChange={handleSexoChange}
              customClass="title"
            />
            <CheckBox
              side="right"
              isSelected={selectedSexo === "M"}
              name="sexo"
              value="M"
              text="( )M"
              handleOnChange={handleSexoChange}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <Input type="number" name="ra" text="RA" />
          <Input type="text" name="cpf" text="CPF" />
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
          <label htmlFor="education-Fundamental I" className={styles.label}>
            Escolaridade:
          </label>
          <div>
            <CheckBox
              isSelected={selectedSchool === "Fundamental I"}
              name="education"
              side="right"
              text="Fundamental I"
              value="Fundamental I"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Fundamental II"}
              side="right"
              name="education"
              text="Fundamental II"
              value="Fundamental II"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Ensino Médio"}
              side="right"
              name="education"
              text="Ensino Médio"
              value="Ensino Médio"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Ensino Técnico"}
              side="right"
              name="education"
              text="Ensino Técnico"
              value="Ensino Técnico"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Graduação"}
              side="right"
              name="education"
              text="Graduação"
              value="Graduação"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              isSelected={selectedSchool === "Pós Graduação"}
              side="right"
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
                    isSelected={selectedTurno === "Manhã"}
                    side="right"
                    value="Manhã"
                    name="course"
                    text="Manhã"
                    handleOnChange={handleTurnoChange}
                  />
                  <CheckBox
                    isSelected={selectedTurno === "Tarde"}
                    side="right"
                    value="Tarde"
                    name="course"
                    text="Tarde"
                    handleOnChange={handleTurnoChange}
                  />
                  <CheckBox
                    isSelected={selectedTurno === "Noite"}
                    side="right"
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
            isSelected={selectedVinculo === "Vínculo com Unioeste"}
            customClass="bold"
            side="right"
            value="Vínculo com Unioeste"
            name="vinculo_com_unioeste"
            text="Vínculo com Unioeste:"
            handleOnChange={handleVinculoChange}
          />
          {showTypeVinculo && (
            <div className={styles.flex}>
              <CheckBox
                isSelected={selectedTypeVinculo === "Docente"}
                side="right"
                value="Docente"
                name="vinculo_com_unioeste"
                text="Docente"
                handleOnChange={handleTypeVinculoChange}
              />
              <CheckBox
                isSelected={selectedTypeVinculo === "Agente"}
                side="right"
                value="Agente"
                name="vinculo_com_unioeste"
                text="Agente"
                handleOnChange={handleTypeVinculoChange}
              />
              <CheckBox
                isSelected={selectedTypeVinculo === "Acadêmico"}
                side="right"
                value="Acadêmico"
                name="vinculo_com_unioeste"
                text="Acadêmico"
                handleOnChange={handleTypeVinculoChange}
              />
              <CheckBox
                isSelected={selectedTypeVinculo === "Estagiário"}
                side="right"
                value="Estagiário"
                name="vinculo_com_unioeste"
                text="Estagiário"
                handleOnChange={handleTypeVinculoChange}
              />
            </div>
          )}
        </div>
        {showSetor && (
          <div>
            <Input
              type="text"
              name="setor"
              text="Setor que trabalha"
              customClass="flex_1"
            />
          </div>
        )}
        <div style={{ marginBottom: "1em" }}>
          <CheckBox
            isSelected={selectedCommunity === "Comunidade Externa"}
            side="right"
            name="community"
            value="Comunidade Externa"
            text="Comunidade Externa"
            customClass="bold"
            handleOnChange={handleCommunityChange}
          />
        </div>
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="work" className={styles.label}>
            Você trabalha?
          </label>
          <CheckBox
            isSelected={selectedWork === "Não trabalha"}
            side="right"
            value="Não trabalha"
            handleOnChange={handleWorkChange}
            name="work"
            text="( ) Não"
          />
          <CheckBox
            isSelected={selectedWork === "Trabalha"}
            side="right"
            handleOnChange={handleWorkChange}
            value="Trabalha"
            name="working"
            text="( ) Sim"
          />
        </div>
        {showWork && (
          <div>
            <Input type="time" name="work" text="Trabalha em qual horário?" />
          </div>
        )}
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="follow_psycho-Não" className={styles.label}>
            Já realizou algum acompanhamento psicológico?
          </label>
          <div className={styles.flex}>
            <CheckBox
              isSelected={selectedPsycho === "Não"}
              side="right"
              value="Não"
              name="follow_psycho"
              text="( ) Não"
              handleOnChange={handlePsychoChange}
            />
            <CheckBox
              isSelected={selectedPsycho === "Sim"}
              side="right"
              name="follow_psycho"
              value="Sim"
              text="( ) Sim"
              handleOnChange={handlePsychoChange}
            />
          </div>
        </div>
        {showPsycho && (
          <div>
            <Input
              type="text"
              name="follow_psycho"
              text="Por quanto tempo acompanhamento psicológico?"
            />
          </div>
        )}

        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <label htmlFor="follow_psychiatric-Não" className={styles.label}>
            Já realizou algum acompanhamento psiquiátrico?
          </label>
          <div className={styles.flex}>
            <CheckBox
              isSelected={selectedPsychi === "Não"}
              side="right"
              value="Não"
              name="follow_psychiatric"
              text="( ) Não"
              handleOnChange={handlePsychiChange}
            />
            <CheckBox
              isSelected={selectedPsychi === "Sim"}
              side="right"
              value="Sim"
              name="follow_psychiatric"
              text="( ) Sim"
              handleOnChange={handlePsychiChange}
            />
          </div>
        </div>
        {showPsychi && (
          <div>
            <Input
              type="text"
              name="follow_psychiatric"
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