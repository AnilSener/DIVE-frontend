import React, { Component, PropTypes } from 'react';
import baseStyles from './BlockingModal.sass';

export default class BlockingModal extends Component {
  render() {
    const styles = this.props.styles ? this.props.styles : baseStyles;

    return (
      <div
        className={
          styles.blockingModalMask
          + (this.props.blackBackground ? ' ' + styles.blackBackground : '' )
        }
      >
        <div className={ styles.blockingModalContainer }>
          <div className={
            styles.blockingModal
            + ' ' + this.props.className
            + (this.props.scrollable ? ' ' + styles.scrollable : '')
            }>
            <div className={ styles.modalHeader }>
              <span>{ this.props.heading }</span>
              { this.props.closeAction &&
                <div className={ styles.actions }>
                  <div className={ styles.closeAction } onClick={ this.props.closeAction }>&times;</div>
                </div>
              }
            </div>
            <div className={ styles.modalContent }>
              { this.props.children }
            </div>
            { this.props.footer &&
              <div className={ styles.modalFooter }>
                { this.props.footer }
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

BlockingModal.propTypes = {
  heading: PropTypes.node,
  footer: PropTypes.node,
  styles: PropTypes.any,
  className: PropTypes.string,
  closeAction: PropTypes.func,
  children: PropTypes.node,
  scrollable: PropTypes.bool,
  blackBackground: PropTypes.bool
}

BlockingModal.defaultProps = {
  heading: "",
  styles: null,
  footer: null,
  className: "",
  closeAction: null,
  scrollable: false,
  className: '',
  blackBackground: false
}
