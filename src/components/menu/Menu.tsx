import { Button, Form, Input, Modal, Space } from "antd";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompetition } from "../../redux/reducers/competition";
import { setSettings } from "../../redux/reducers/settings";
import {
  selectStart,
  setOn,
  setResultOff,
  setResultOn,
} from "../../redux/reducers/start";

import "./Menu.css";

const { Item } = Form;

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({ range: 10, interval: 3, steps: 5 });
  const startOn = useSelector(selectStart);
  const [onResult, setOnResult] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    dispatch(setSettings(options));
    dispatch(
      setCompetition({
        level:
          Number(options.range) +
          Number(20 / options.interval) +
          Number(options.steps),
      })
    );
    setOpen(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.value,
    });
  };
  const handleStart = () => {
    dispatch(setOn());
    dispatch(setResultOff());
    setOnResult(true);
  };
  const handleResults = () => {
    dispatch(setResultOn());
    setOnResult(false);
  };
  useEffect(() => {}, []);
  return (
    <Space className="menu">
      <Button className="menu-button" onClick={openModal}>
        Configuración
      </Button>
      <Modal
        title="Configuración"
        open={open}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <Form>
          <Item label="Cantidad de operaciones">
            <Input type="number" name="steps" onChange={handleChange} />
          </Item>
          <Item label="Rango">
            <Input type="number" name="range" onChange={handleChange} />
          </Item>
          <Item label="Intervalo (segundos)">
            <Input type="number" name="interval" onChange={handleChange} />
          </Item>
          <Item label="Dificultad">
            <Input
              type="number"
              value={
                Number(options.range) +
                Number(20 / options.interval) +
                Number(options.steps)
              }
            />
          </Item>
        </Form>
      </Modal>
      {!startOn.on && !onResult && (
        <Button type="primary" className="menu-button" onClick={handleStart}>
          Iniciar
        </Button>
      )}
      {startOn.on && onResult && (
        <Button type="primary" className="menu-button" disabled>
          Iniciar
        </Button>
      )}
      {!startOn.on && onResult && (
        <Button type="primary" className="menu-button" onClick={handleResults}>
          Ver Resultado
        </Button>
      )}
    </Space>
  );
}
