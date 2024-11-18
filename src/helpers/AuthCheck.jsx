import { message } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCheck() {
    const auth = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            message.error("You are already logged in");
            navigate('/');
        }
    }, [auth, navigate]);

    return null;
}

