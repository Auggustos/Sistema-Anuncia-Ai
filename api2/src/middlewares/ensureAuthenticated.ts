import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  perfil: number;
}

export default function ensureAuhenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  // Validação do token JWT

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token JWT não foi encontrado');
  }

  // Bearer token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, perfil } = decoded as TokenPayload;

    request.user = {
      id: sub,
      perfil,
    };

    return next();
  } catch (err) {
    throw new Error('Token JWT inválido');
  }
}
