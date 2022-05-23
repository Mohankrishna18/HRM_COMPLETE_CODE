import React from "react";
import styled from "styled-components";

const Switch = ({ on, onSwitch }) => {
  return (
    <Style>
      <button onClick={onSwitch} className={on ? "on" : "off"}>
        <span />
      </button>
    </Style>
  );
};

const Style = styled.div`
  button {
    width: 60px;
    height: 30px;
    position: relative;
    background: #FF0000;
    border-radius: 50px;
    border: solid 1px #eee;
    outline: none;
    transition: background 0.4s;

    span {
      position: absolute;
      top: 2px;
      left: 4px;
      width: 24px;
      height: 24px;
      background: #fff;
      border-radius: 40px;
      transition: all 0.2s cubic-bezier(0, 0, 0.46, 1.82);
      transition: all 0.2s cubic-bezier(0.24, 1.74, 0.92, 0.85);
    }

    &:active {
      span {
        width: 50px;
      }

      &.on span {
        margin-left: -54px;
      }
    }

    &.on {
      background: #00FF00;
      span {
        left: 130%;
        margin-left: -44px;
      }
    }
  }
`;

export default Switch;
