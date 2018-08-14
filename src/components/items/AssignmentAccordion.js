import React, { Component } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'

class AssignmentAccordion extends Component {
  render() {
    return(
      <Accordion className='accordion'>
        <AccordionItem className='accordion--item'>
          <AccordionItemTitle className='accordion--title'>
            <h3>Assignment 1</h3>
          </AccordionItemTitle>
          <AccordionItemBody
            className='accordion--body'
            hideBodyClassName='accordion--body-hidden'>
              <p>Assignment 1 details</p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem className='accordion--item'>
          <AccordionItemTitle className='accordion--title'>
            <h3>Assignment 2</h3>
          </AccordionItemTitle>
          <AccordionItemBody
            className='accordion--body'
            hideBodyClassName='accordion--body-hidden'>
            <p>Assignment 2 details</p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    )
  }
}

export default AssignmentAccordion
