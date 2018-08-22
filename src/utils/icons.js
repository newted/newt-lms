import React from 'react'
import { FiCode } from 'react-icons/fi'
import { TiBriefcase, TiCalculator } from 'react-icons/ti'
import { MdDeveloperBoard } from 'react-icons/md'

const iconSize = 30

export const BSYSicon = <FiCode size={ iconSize } />
export const BUSAicon = <TiBriefcase size={ iconSize } />
export const FMGTicon = <TiCalculator size={ iconSize } />
export const OPMTicon = <MdDeveloperBoard size={ iconSize } />

export const icons = {
  byDepartment: {
    "Business Systems": BSYSicon,
    "Business Administration": BUSAicon,
    "Financial Management": FMGTicon,
    "Operations Management": OPMTicon
  }
}
