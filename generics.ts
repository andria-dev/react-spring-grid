import React from 'react'
import { useTransition } from 'react-spring'

export type ObjectOf<T> = { [s: string]: T }
export type Component<T = ObjectOf<any>> = string | React.ComponentType<T>
export type UnwrapArray<T> = T extends Array<infer U> ? U : T
