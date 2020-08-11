import React, { useState } from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input";

import warningItem from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Taxtarea";
import Select from "../../components/Select";

export default function TeacherForm() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preecher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input
            name="name"
            label="Nome completo"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="avatar"
            label="Avatar"
            onChange={(e) => setAvatar(e.target.value)}
          />
          <Input
            name="whatsapp"
            label="Whatsapp"
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <Textarea
            name="bio"
            label="Biografia"
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Eudacação Física", label: "Eudacação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Input
            name="cost"
            label="Custo da sua aula por hora"
            onChange={(e) => setCost(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>
          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da Semana"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-feira" },
                    { value: "2", label: "Terça-feira" },
                    { value: "3", label: "Quarta-feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5", label: "Sexta-feira" },
                    { value: "6", label: "Sábado" },
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningItem} alt="Aviso importante" />
            Importante! <br />
            Preecha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
