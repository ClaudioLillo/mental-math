import { Button, Form, Input, Modal, Space } from "antd";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [options, setOptions] = useState({});
  const startOn = useSelector(selectStart);
  const [onResult, setOnResult] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    dispatch(setSettings(options));
    setOpen(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [event.target.name]: parseInt(event.target.value),
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
        Settings
      </Button>
      <Modal title="Settings" open={open} onOk={handleOk} onCancel={handleOk}>
        <Form>
          <Item label="Cantidad de operaciones">
            <Input type="number" name="steps" onChange={handleChange} />
          </Item>
          <Item label="Rango">
            <Input type="number" name="range" onChange={handleChange} />
          </Item>
          <Item label="Intervalo">
            <Input type="number" name="interval" onChange={handleChange} />
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
