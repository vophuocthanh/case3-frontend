// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/employee`
  | `/employee/create`
  | `/employee/update`
  | `/login`
  | `/pay-rates`
  | `/pay-rates/create`
  | `/pay-rates/update`
  | `/users`
  | `/users/create`
  | `/users/update`

export type Params = {}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
