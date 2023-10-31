// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/:id`
  | `/admin`
  | `/employee`
  | `/employee/create`
  | `/employee/update`
  | `/forgot-password`
  | `/login`
  | `/pay-rates`
  | `/pay-rates/create`
  | `/pay-rates/update`
  | `/search`
  | `/users`
  | `/users/create`
  | `/users/update`

export type Params = {
  '/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
