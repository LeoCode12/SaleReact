import {MdPerson} from "react-icons/md"
import {AiFillEye, AiFillLock } from 'react-icons/ai'

import { useState } from "react";

import { Button, Form } from 'react-bootstrap';
import './style.css'



function Login ({correo, contraseña}){
  const [show, setShow] = useState(false)
  const [color, setColor] = useState(false)
  const switchShow = () => {
    setShow(!show)
    setColor(!color)
  }
  
  const [password, setPassword] = useState('')
  const onChange = ({currentTarget}) => setPassword(currentTarget.value)
  
    return (
      <div className="contenedor-principal">
        <div className="contenedor-login">
          <h1 className="title-login">Iniciar Sesion</h1>
          <Form>
            <Form.Group className="col mb-3 form-group d-flex" controlId="formBasicEmail">
              <div className="contenedor-icon">
                <MdPerson className="icon-form" size={20} />
              </div>
              <div className="form-floating form-subgroup w-100">
                <Form.Control className="form-control" id="correo" type="email" placeholder="Enter email" />
                <Form.Label className="label" for="floatingInput">Correo Electronico</Form.Label>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 form-group d-flex" controlId="formBasicPassword">
              <div className="contenedor-icon icon-lock">
                <AiFillLock className="icon-form mx-1" size={20} />
              </div>
              <div className="form-floating form-subgroup w-100">
                <Form.Control 
                className="form-control input"
                onChange={onChange}
                type={show ? 'text' : 'password'}
                value={password}
                id="contraseña" 
                placeholder="Password" />
                <Form.Label className="label" for="floatingInput">Contraseña</Form.Label>
              </div>
              <Button 
              variant={color ? 'primary' : 'light'}
              className="btn-login"
              onClick={switchShow} > <AiFillEye className="icon-eye" size={20}/> </Button>
              
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="submit">
                Iniciar Sesion
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
}

export default Login