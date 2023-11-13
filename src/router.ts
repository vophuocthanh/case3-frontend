// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/employee`
  | `/employee/create`
  | `/employee/update`
  | `/employee/update/:Employee_Number`
  | `/login`
  | `/pay-rates`
  | `/pay-rates/create`
  | `/pay-rates/update`
  | `/pay-rates/update/:idPayRates`
  | `/users`
  | `/users/create`
  | `/users/update`
  | `/users/update/:userId`

export type Params = {
  '/employee/update/:Employee_Number': { Employee_Number: string }
  '/pay-rates/update/:idPayRates': { idPayRates: string }
  '/users/update/:userId': { userId: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
