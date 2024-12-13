import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Space, Typography } from "antd";
import "./MainBoard.css";
import { selectStart, setOff } from "../../redux/reducers/start";
import createSteps from "../../utils/createSteps";
import { selectSettings } from "../../redux/reducers/settings";
import withSign from "../../utils/withSign";
import { setCompetition } from "../../redux/reducers/competition";

const { Title } = Typography;

export default function MainBoard() {
  const [value, setValue] = useState<number | string>(
    "Presiona INICIAR para comenzar"
  );
  const [result, setResult] = useState<number | string>("");
  const startOn = useSelector(selectStart);
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const showNumbers = (steps: (number | string)[]) => {
    let i = 0;
    const timer = setInterval(
      () => {
        if (i >= steps.length - 2) {
          dispatch(setOff());
          clearInterval(timer);
        }
        setValue(i === 0 ? steps[i] : withSign(steps[i]));
        i++;
      },
      settings.interval ? settings.interval * 1000 : 3000
    );
    setResult(steps[steps.length - 1]);
  };

  useEffect(
    () => {
      if (startOn.on) {
        const values = createSteps(settings.steps, settings.range);
        dispatch(
          setCompetition({ result: parseInt(values[values.length - 1]) })
        );
        setValue(values[0]);
        showNumbers(values);
      }
    },
    // falta una dependencia que es showNumbers, habría que probar si funciona al declarar la función dentro del useEffect
    [startOn, settings]
  );

  return (
    <Space className="mainBoard">
      <Title>{startOn.result ? result : value}</Title>
    </Space>
  );
}
