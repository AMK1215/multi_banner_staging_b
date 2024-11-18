import React, { useContext, useState } from 'react';
import passwordIcon from '../assets/images/password.png';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import BASE_URL from '../hooks/baseUrl';
import useFormSubmit from "../hooks/useFormSubmit"
import { AuthContext } from '../contexts/AuthContext';

export default function ChangePasswordModal({ content }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [current_password, setCurrentPassword] = useState("");
    const [new_password, setNewPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

    const { inputSubmit, error, loading, errMsg } = useFormSubmit();
    const handleChangePassword = async (e) => {
        e.preventDefault();
        let inputData = {
            current_password,
            password: new_password,
            password_confirmation
        }
        let url = BASE_URL + "/change-password/";
        let method = "POST";
        let redirect = "/";
        let msg = "Password changed successfully";
        await inputSubmit(url, inputData, method, redirect, msg);
    }

    return (
        <div>
            <div className="mb-3 cursor-pointer" onClick={handleShow}>
                <img src={passwordIcon} className="icon me-2" alt="Change password icon" />
                <small>{content?.profile?.change_password}</small>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-dark">
                        <h6>{content?.profile?.change_password}</h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleChangePassword}>
                        <Form.Group className="mb-3" controlId="oldPassword">
                            <Form.Label className="text-black">{content?.profile?.old_password}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={content?.profile?.enter_old_password}
                                onChange={e => setCurrentPassword(e.target.value)}
                                value={current_password}
                            />
                            {error && error.current_password && <span className='text-danger'>{error.current_password}</span>}
                            {errMsg && errMsg && <span className='text-danger'>{errMsg}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newPassword">
                            <Form.Label className="text-black">{content?.profile?.new_password}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={content?.profile?.enter_new_password}
                                onChange={e => setNewPassword(e.target.value)}
                                value={new_password}
                            />
                            {error && error.password && <span className='text-danger'>{error.password}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="repeatNewPassword">
                            <Form.Label className="text-black">{content?.profile?.confirm_password}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={content?.profile?.enter_confirm_password}
                                onChange={e => setPasswordConfirmation(e.target.value)}
                                value={password_confirmation}
                            />
                            {error && error.password_confirmation && <span className='text-danger'>{error.password_confirmation}</span>}
                        </Form.Group>
                        <div className="text-end">
                            <Button type='submit' variant="danger">
                                {loading && <Spinner className='me-1' animation="border" size="sm" />}
                                {content?.profile?.change_password}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
