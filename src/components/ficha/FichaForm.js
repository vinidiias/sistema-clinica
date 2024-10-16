import styles from './FichaForm.module.css'

import { useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import CheckBox from '../form/CheckBox'

const FichaForm = () => {

  const [selectedSchool, setSelectedSchool] = useState(null)
  const [selectedSexo, setSelectedSexo] = useState(null)
  const [selectedTurno, setSelectedTurno] = useState(null)
  const [showCurso, setShowCurso] = useState(false)

  function handleSchoolChange(value) {
    const newSchool = selectedSchool === value ? null : value;
    setSelectedSchool(newSchool);

    handleSetShowCurso(newSchool);
}

  function handleSexoChange(value) {
    setSelectedSexo(selectedSexo === value ? null : value )
  }

  function handleSetShowCurso(currentSchool) {
    if (currentSchool === 'grad' || currentSchool === 'gradII') {
        setShowCurso(true);
    } else {
        setShowCurso(false);
    }
}
    return (
      <form className={styles.ficha_form}>
        <Input type="text" name="name" text="Nome" autoComplete="username" />
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
          <Input type="number" name="ra" text="ra" />
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
        <div className={styles.flex}>
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
              <div>
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
                    handleSetShowCurso={handleSetShowCurso}
                    handleOnChange={handleSchoolChange}
                  />
                  <CheckBox
                    selected={selectedSchool}
                    name="afternoon"
                    text="Tarde"
                    handleOnChange={handleSchoolChange}
                  />
                  <CheckBox
                    selected={selectedSchool}
                    name="night"
                    text="Noite"
                    handleOnChange={handleSchoolChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    );
}

export default FichaForm