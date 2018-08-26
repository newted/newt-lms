import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'

const NoInfo = ({ title, sizeClass }) => (
  <div className={ sizeClass }>
    <h3 className='header--3'>{ title }</h3>
    <div className='panel'>
      <div className='panel-body'>
        You don't have any { title.toLowerCase() }
      </div>
    </div>
  </div>
)

class ItemAccordion extends Component {
  render() {
    const { title, sizeClass, data } = this.props

    if (data.length === 0) {
      return <NoInfo title={ title } sizeClass={ sizeClass } />
    }

    return (
      <div className={ sizeClass }>
        <h3 className='header--3'>{ title }</h3>
        <Accordion className='accordion' accordion={ false }>
          { data.map((infoObj) => (
            <AccordionItem className='accordion--item' key={ infoObj.id }>
              <AccordionItemTitle className='accordion--title'>
                <h3>{ infoObj.name }</h3>
              </AccordionItemTitle>
              <AccordionItemBody
                className='accordion--body'
                hideBodyClassName='accordion--body-hidden'>
                  <p>{ infoObj.details }</p>
                </AccordionItemBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
}

function mapStateToProps(_, { title, data, sizeClass }) {
  return {
    title,
    sizeClass,
    data
  }
}

export default connect(mapStateToProps)(ItemAccordion)
