const express = require('express');
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    console.log(headerToken);

    if(headerToken != undefined && headerToken.startsWith('Bearer ')){
        try{
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'poli123');
            next();
        }catch(error){
            res.status(401).json({ msj: 'token no válido'});
        }

    }else{
        res.status(401).json({ msj: 'Acceso denegado'});
    }
    
}

module.exports = validateToken;