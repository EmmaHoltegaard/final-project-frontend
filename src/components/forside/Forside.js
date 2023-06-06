import React from 'react';
import { Intro } from './Intro'
import { Uddannelse } from './Uddannelse'

export const Forside = () => {
  return (
    <>
      <h1>Forsiden</h1>
      <Intro />
      <Uddannelse />
    </>
  )
}