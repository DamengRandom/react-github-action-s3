export const propsList = [
  'Stands for properties (syntax: this.props, props)',
  'Immutable (Read only cannot be modified)',
  'Used for pass data or event handlers down to child level components',
  'Often used for stateless component',
  'prop is external and controlled by upper level component',
  'props can be passed as function',
];

export const statesList = [
  'Is an object which tracking the current situation about component (syntax: this.state, state)',
  'Mutable (able to change)',
  'Used for update/change current page data status, (eg: show or hide HTML content based on toggle state value changes)',
  'Often used for stateful component',
  'Can be changed asynchronous and can be changed by setState() or hook functions',
  'state is internal and controlled by component itself',
  'when using useState hook, we can pass function as state',
];

export const propsExample = [
  {
    title: 'Dashboard.js',
    code: `
import React, { useState } from "react";

import ModalWrapper from "../components/organisms/ModalWrapper";

import { DemoDataProvider } from "../contexts/contextDemo";

export default function Dashboard() {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(true);
  };

  return (
    <DemoDataProvider>
      <h4>Modal Skeleton</h4>
      <button onClick={handleClick}>Open Modal</button>
      <ModalWrapper toggleModal={toggleModal} setToggleModal={setToggleModal} />
    </DemoDataProvider>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'ModalWrapper.js',
    code: `
import React from "react";
import { CSSTransition } from "react-transition-group";
import styled, { keyframes } from "styled-components";

import Modal from "../molecules/Modal";

const fadeIn = keyframes\`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`;

const fadeOut = keyframes\`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
\`;

const ModalContainer = styled.div\`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: \${props => (props.toggleModal ? fadeIn : fadeOut)} 0.2s linear;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
\`;

export default function ModalWrapper({ toggleModal, setToggleModal }) {
  return (
    <CSSTransition in={toggleModal} timeout={150} unmountOnExit>
      <ModalContainer toggleModal={toggleModal}>
        <div>
          <Modal setToggleModal={setToggleModal} toggleModal={toggleModal}>
            <p>Modal Content !!</p>
          </Modal>
        </div>
      </ModalContainer>
    </CSSTransition>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Modal.js',
    code: `
import React from 'react';
import styled from 'styled-components';

import { themeLightColor } from '../../styles/variables';

const ModalBox = styled.div\`
  width: 400px;
  height: 400px;
  background-color: \${themeLightColor};
\`;

export default function Modal({ setToggleModal, children }) {
  return (
    <ModalBox>
      <button
        onClick={() => {
          setToggleModal(false);
        }}
      >
        &#10005;
      </button>
      {children}
    </ModalBox>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const stateExample = [
  {
    title: 'FunctionAsState.jsx',
    code: `
import React, { useState } from "react";

export default function FunctionAsState() {
  const computation = () => {
    const randomValue = Math.floor(Math.random() * 100);
    const firstStep = (Math.round(43.3434) / randomValue) * 333;
    let secondStep = 0;

    for (let index = 0; index < 100; index++) {
      if (index % 2 === 0) secondStep += index * randomValue;
    }

    return parseFloat(firstStep + secondStep + randomValue).toFixed(2);
  };
  const [value, setValue] = useState(computation);
  const handleClick = () => {
    setValue(computation);
  };

  return (
    <div>
      <p>Output always different: {value && value}</p>
      <button onClick={handleClick}>update Value</button>
    </div>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
