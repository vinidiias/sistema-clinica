import styles from './FichaForm.module.css'

import { useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import CheckBox from '../form/CheckBox'
import Table from '../form/Table'

const FichaForm = () => {

  const [selectedSchool, setSelectedSchool] = useState(null)
  const [selectedSexo, setSelectedSexo] = useState(null)
  const [selectedTurno, setSelectedTurno] = useState(null)
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(null)
  const [selectedVinculo, setSelectedVinculo] = useState(null)
  const [selectedTypeVinculo, setSelectedTypeVinculo] = useState(null)

  const [showSetor, setShowSetor] = useState(false)
  const [showCurso, setShowCurso] = useState(false)
  const [showTypeVinculo, setShowTypeVinculo] = useState(false)

  function handleSchoolChange(value) {
    const newSchool = selectedSchool === value ? null : value;
    setSelectedSchool(newSchool);

    handleSetShowCurso(newSchool);
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
    if (currentSetor === 'agente') {
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
    if (currentSchool === "grad" || currentSchool === "gradII") {
      setShowCurso(true);
    } else {
      setShowCurso(false);
    }
  }




    return (
      <form className={styles.ficha_form}>
        <div className={styles}>
          <Input type="text" name="name" text="Nome" autoComplete="username" />
        </div>
        <div className={styles.flex}>
          <Input type="number" name="age" text="Idade" />
          <Input type="date" name="date" text="Data de Nascimento" />
          <div className={styles.sex}>
            <p
              style={{
                fontSize: ".9em",
                fontWeight: "bold",
                marginRight: "5px",
              }}
            >
              Sexo:
            </p>
            <CheckBox
              selected={selectedSexo}
              name="F"
              text="( )F"
              handleOnChange={handleSexoChange}
            />
            <CheckBox
              selected={selectedSexo}
              name="M"
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
        <Input type="text" name="work" text="Profissão" />
        <div style={{ marginBottom: "1em" }} className={styles.flex}>
          <p
            style={{
              fontSize: ".9em",
              fontWeight: "bold",
              marginRight: "5px",
            }}
          >
            Escolaridade:
          </p>
          <div>
            <CheckBox
              selected={selectedSchool}
              name="fundI"
              text="Fundamental I"
              handleOnChange={() => {
                handleSchoolChange("fundI");
              }}
            />
            <CheckBox
              selected={selectedSchool}
              name="fundII"
              text="Fundamental II"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              selected={selectedSchool}
              name="em"
              text="Ensino Médio"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              selected={selectedSchool}
              name="et"
              text="Ensino Técnico"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              selected={selectedSchool}
              name="grad"
              text="Graduação"
              handleOnChange={handleSchoolChange}
            />
            <CheckBox
              selected={selectedSchool}
              name="gradII"
              text="Pós Graduação"
              handleOnChange={handleSchoolChange}
            />
            {showCurso && (
              <div style={{ marginTop: "1em" }}>
                <div className={styles.flex}>
                  <Input type="text" name="curso" text="Curso" />
                  <Input type="text" name="periodo" text="Ano/período" />
                </div>
                <div className={styles.flex}>
                  <p
                    style={{
                      fontSize: ".9em",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    Turno do seu curso:
                  </p>
                  <CheckBox
                    selected={selectedTurno}
                    name="morning"
                    text="Manhã"
                    handleOnChange={handleTurnoChange}
                  />
                  <CheckBox
                    selected={selectedTurno}
                    name="afternoon"
                    text="Tarde"
                    handleOnChange={handleTurnoChange}
                  />
                  <CheckBox
                    selected={selectedTurno}
                    name="night"
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
        <div style={{marginBottom: '1em'}} className={styles.flex}>
          <CheckBox
            selected={selectedVinculo}
            name="vinculo_unioeste"
            text="Vínculo com a Unioeste:"
            handleOnChange={handleVinculoChange}
            customClass="bold"
          />
          {showTypeVinculo && (
            <div className={styles.flex}>
              <Input
                customClass="marginBottom_zero light"
                selected={selectedTypeVinculo}
                handleOnChange={() => {
                  handleTypeVinculoChange("docente");
                }}
                type="checkbox"
                name="docente"
                text="Docente"
              />
              <Input
                customClass="marginBottom_zero light"
                selected={selectedTypeVinculo}
                handleOnChange={() => {
                  handleTypeVinculoChange("agente");
                }}
                type="checkbox"
                name="agente"
                text="Agente"
              />
              <Input
                customClass="marginBottom_zero light"
                selected={selectedTypeVinculo}
                handleOnChange={() => {
                  handleTypeVinculoChange("student");
                }}
                type="checkbox"
                name="student"
                text="Acadêmico"
              />
              <Input
                customClass="marginBottom_zero light"
                selected={selectedTypeVinculo}
                handleOnChange={() => {
                  handleTypeVinculoChange("estagiario");
                }}
                type="checkbox"
                name="estagiario"
                text="Estagiário"
              />
            </div>
          )}
        </div>
        {showSetor && (
          <div>
            <Input type="text" name="setor" text="Setor que trabalha" />
          </div>
        )}
        <div>
          <div></div>
        </div>
      </form>
    );
}

export default FichaForm