import {BsFillLockFill, BsPersonFill} from "react-icons/bs"
import {AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { useState } from "react";

import { Button, Form } from 'react-bootstrap';
import './style.css'



function Login (){
  const [show, setShow] = useState(false)
  const switchShow = () => setShow(!show)
  
  const [password, setPassword] = useState('')
  const onChange = ({currentTarget}) => setPassword(currentTarget.value)
  
    return (
      <div className="contenedor-principal">
        <div className="contenedor-login">
          <h1 className="title-login">Iniciar Sesion</h1>
          <Form>
            <Form.Group className="col mb-3 form-group" controlId="formBasicEmail">
              <div className="contenedor-icon">
                <BsPersonFill className="icon-form" size={20} />
              </div>
              <div className="form-floating form-subgroup">
                <Form.Control className="form-control" type="email" id="floatingInput" placeholder="Enter email" />
                <Form.Label className="label" for="floatingInput">Correo Electronico</Form.Label>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
              <div className="contenedor-icon icon-lock">
                <BsFillLockFill className="icon-form" size={20} />
              </div>
              <div className="form-floating form-subgroup">
                <Form.Control 
                className="form-control input"
                onChange={onChange}
                type={show ? 'text' : 'password'}
                value={password}
                id="floatingInput" 
                placeholder="Password" />
                <Form.Label className="label" for="floatingInput">Contraseña</Form.Label>
              </div>
              <Button 
              variant="light" 
              className="contenedor-icon btn-login"
              onClick={switchShow} > <AiFillEye className="icon-eye" size={20}/> </Button>
              
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Iniciar Sesion
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
}

export default Login