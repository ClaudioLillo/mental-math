import React, { ChangeEvent, useState } from "react";
import { Switch, Form, Input, Button, Typography, Divider } from "antd";

import "./Competition.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCompetition } from "../../redux/reducers/competition";

const { Item } = Form;

type User = {
  name: string | undefined;
  lastName: string | undefined;
  grade: string | undefined;
  listNumber: number | undefined;
};

export default function Competition() {
  const [mode, setMode] = useState(false);
  const [state, setState] = useState({
    grade: undefined,
    listNumber: undefined,
  });
  const [user, setUser] = useState<User>({
    name: undefined,
    lastName: undefined,
    grade: undefined,
    listNumber: undefined,
  });
  const [result, setResult] = useState<number | undefined>(undefined);
  const competition = useSelector(selectCompetition);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const changeMode = () => {
    setMode(!mode);
  };

  const findUser = () => {
    console.log("find user");
    const user = {
      name: "Juan",
      lastName: "Gato",
      grade: "3b",
      listNumber: 34,
    };
    setUser(user);
    console.log(state);
  };

  const clear = () => {
    setState({ grade: undefined, listNumber: undefined });
  };

  const handleResult = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(parseInt(e.target.value));
  };

  const verifyResult = () => {
    if (result === competition.result) {
      alert("Correcto");
    } else {
      alert("Vuelve a intentarlo");
    }
  };

  return (
    <div className="competition">
      <div className="switch-container">
        <Switch onChange={changeMode} size="default" />
        <Typography className="margin-left">Modo Competición</Typography>
      </div>
      <Divider />

      <Form hidden={!mode} size="large">
        <Item label="Número de lista">
          <Input
            type="number"
            name="listNumber"
            onChange={handleChange}
            value={state.listNumber}
          />
        </Item>
        <Item label="Curso">
          <Input
            type="text"
            name="grade"
            onChange={handleChange}
            value={state.grade}
          />
        </Item>
        <Button onClick={clear}>Limpiar</Button>
        <Button className="margin-left" onClick={findUser}>
          Aplicar
        </Button>
      </Form>
      <Divider />
      {user && (
        <Typography
          hidden={user.name ? false : true}
        >{`${user.name} ${user.lastName} | Dificultad: ${competition.level}`}</Typography>
      )}
      <Form>
        <Item label="Resultado">
          <Input type="number" name="result" onChange={handleResult} />
        </Item>
        <Button onClick={verifyResult}>Verificar</Button>
      </Form>
    </div>
  );
}
