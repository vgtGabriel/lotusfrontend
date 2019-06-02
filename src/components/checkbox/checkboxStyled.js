import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

.toggle{
  --uiToggleSize: var(--toggleSize, 20px);
  --uiToggleIndent: var(--toggleIndent, .4em);
  --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
  --uiToggleColor: var(--toggleColor, none);
  --uiToggleDisabledColor: var(--toggleDisabledColor, #868e96);
  --uiToggleBgColor: var(--toggleBgColor, #fff);
  --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);
  --uiToggleArrowColor: var(--toggleArrowColor, #fff);


  display: inline-block;
  position: relative;
  color:#fff;
}

.toggle__input{

  position: absolute;
  display:none;
}

.toggle__label{
    border-radius: 22px;
  display: inline-flex;
  cursor: pointer;
  min-height: var(--uiToggleSize);
  padding-left: calc(var(--uiToggleSize) + var(--uiToggleIndent));
}

.toggle__label:before, .toggle__label:after{
  content: "";
  box-sizing: border-box;  
  width: 1em;
  height: 1em;
  font-size: var(--uiToggleSize);
  position: absolute;
  left: 0;
  top: 0;
}

.toggle__label:before{
  border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);
  z-index: 2;
}

.toggle__input:disabled ~ .toggle__label:before{
  border-color: var(--uiToggleDisabledColor);
}

.toggle__input:focus ~ .toggle__label:before{
  box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
}

.toggle__input:not(:disabled):checked:focus ~ .toggle__label:after{
  box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
}

.toggle__input:not(:disabled) ~ .toggle__label:after{
  background-color: var(--uiToggleColor);
  opacity: 0;
}

.toggle__input:not(:disabled):checked ~ .toggle__label:after{
  opacity: 0;
}

.toggle__text{
  margin-top: auto;
  margin-bottom: auto;
}

/*
The arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle
*/

.toggle__text:before{
  content: "";
  box-sizing: border-box;
  width: 0;
  height: 0;
  font-size: var(--uiToggleSize);

  border-left-width: 0;
  border-bottom-width: 0;
  border-left-style: solid;
  border-bottom-style: solid;
  border-color: var(--uiToggleArrowColor);

  position: absolute;
  top: .5428em;
  left: .2em;
  z-index: 3;

  transform-origin: left top;
  transform: rotate(-40deg) skew(10deg);
}

.toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
  width: .5em;
  height: .25em;
  border-left-width: var(--uiToggleArrowWidth);
  border-bottom-width: var(--uiToggleArrowWidth);
  will-change: width, height;
  transition: width .1s ease-out .2s, height .2s ease-out;
}

.toggle__label:before, .toggle__label:after{
  border-radius: 5px;
  border-color:#fff;
}

.toggle{
  --toggleColor:#fff;
  --toggleBgColor: #004773;
  --toggleSize: 30px;
}

/*  --toggleColor: #690e90;*/
`