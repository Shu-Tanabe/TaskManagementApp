import React, { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  passwordLengthState,
  passwordNumberState,
  passwordCapitalState,
  passwordCharacterState,
} from '../states/rootStates/validation';
import { passwordValidation } from '../hooks/validationHooks';
import SpinnerIcon from '../icons/refresh_black_24dp.svg';
import VisibilityOffIcon from '../icons/visibility_off_black_24dp.svg';
import VisibilityOnIcon from '../icons/visibility_black_24dp.svg';
import CheckIcon from '../atoms/CheckIcon';

const SignUpMenu = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SignUpCard = styled.div`
  width: 380px;
  height: 400px;
  position: absolute;
  display: block;
  background: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #424242;
  padding: 10px 20px 10px 10px;
  h2 {
    /* padding-top: 10px;
    padding-left: 10px; */
  }
  .text-area {
    height: 240px;
    .input-title {
      margin: 0 0 0 0;
      font-weight: bold;
    }
    .validation-status {
      font-size: 12px;
      margin-left: 30px;
      p {
        margin: 10px 0 0 0;
        width: 100%;
        display: inline-flex;
        align-items: center;
        .validation-text {
          margin-left: 5px;
        }
      }
    }
    input {
      width: 340px;
      height: 35px;
      border: none;
      background: #eeeeee;
      font-size: 20px;
      :focus {
        outline-width: 0;
      }
    }
  }
  .input-area {
    display: inline-flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    width: 100%;
    background: #eeeeee;
    height: 40px;
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  button {
    :disabled {
      background: #eeeeee;
      cursor: auto;
      :hover {
        pointer-events: none;
      }
    }
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    background: #26a69a;
    border-radius: 10px;
    width: 132px;
    height: 50px;
    border: #26a69a;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-left: auto;
    p {
      display: inline-flex;
      align-items: center;
      margin: 0 0 0 0;
    }
  }
  .rotate {
    animation-name: rolling;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
  @keyframes rolling {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function SignUp(): JSX.Element {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLength, setIsLength] = useRecoilState<boolean>(passwordLengthState);
  const [isNumber, setIsNumber] = useRecoilState<boolean>(passwordNumberState);
  const [isCapital, setIsCapital] =
    useRecoilState<boolean>(passwordCapitalState);
  const [isCharacter, setIsCharacter] = useRecoilState<boolean>(
    passwordCharacterState,
  );
  const isDisabled = useRecoilValue(passwordValidation);

  const checkValidattion = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const password = target.value;
    const capitalRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const characterRegex = /[-!$%^&*()_+@|~=`{}[\]:";'<>?,./]/;

    // if (password.match(/[^\x01-\x7E\xA1-\xDF]/g) !== null) {
    // if (password.match(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/g) !== null) {
    //   console.log('全角文字です');
    // } バリデーションチェクの際に確認すればいい項目
    if (password.match(capitalRegex) !== null) {
      setIsCapital(true);
    } else {
      setIsCapital(false);
    }
    if (password.match(numberRegex) !== null) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
    if (password.match(characterRegex) !== null) {
      setIsCharacter(true);
    } else {
      setIsCharacter(false);
    }
    if (password.length > 7) {
      setIsLength(true);
    } else {
      setIsLength(false);
    }
  };
  return (
    <SignUpMenu>
      <SignUpCard>
        <h2>サインアップ</h2>
        <form>
          <div className="text-area">
            <p className="input-title">パスワード</p>
            <div className="input-area">
              <input
                type={isVisible ? 'text' : 'password'}
                onChange={checkValidattion}
              />
              {isVisible ? (
                <img
                  src={VisibilityOnIcon}
                  alt="invisible"
                  onClick={() => setIsVisible(false)}
                />
              ) : (
                <img
                  src={VisibilityOffIcon}
                  alt="visible"
                  onClick={() => setIsVisible(true)}
                />
              )}
            </div>
            <div className="validation-status">
              <p>
                <CheckIcon color={isCapital ? '#26a69a' : '#eeeeee'} />
                <span className="validation-text">1文字以上の半角英大文字</span>
              </p>
              <p>
                <CheckIcon color={isNumber ? '#26a69a' : '#eeeeee'} />
                <span className="validation-text">1文字以上の半角数字</span>
              </p>
              <p>
                <CheckIcon color={isCharacter ? '#26a69a' : '#eeeeee'} />
                <span className="validation-text">1文字以上の記号</span>
              </p>
              <p>
                <CheckIcon color={isLength ? '#26a69a' : '#eeeeee'} />
                <span className="validation-text">8文字以上</span>
              </p>
            </div>
          </div>
          <Button>
            <button
              className={
                isDisabled ? 'disabled' : isClicked ? 'clicked' : 'unclicked'
              }
              onClick={() => setIsClicked(true)}
              type="button"
              disabled={!isDisabled}
            >
              {isClicked ? (
                <p>
                  送信中
                  <img src={SpinnerIcon} alt="spinner" className="rotate" />
                </p>
              ) : (
                '送信'
              )}
            </button>
          </Button>
        </form>
      </SignUpCard>
    </SignUpMenu>
  );
}

export default SignUp;
