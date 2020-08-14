import cx from 'classnames'
import { memo } from 'react'

function Button ({ type, role, children, className, background, color }) {
  return (
    <button
      role={role || 'button'}
      type={type}
      className={cx('button', className)}
    >
      <span className='text'>
        {children}
      </span>
      <style jsx>
        {`
          .button {
            appearance: none;
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-shrink: 0;
            color: ${color || '#fff'};
            background-color: ${background || '#000'};
            border-color: ${background || '#000'};
            border-radius: var(--igs-radius);
            border-width: 1px;
            overflow: hidden;
            outline: none;
            min-height: 40px;
            font-size: 0.875rem;
            font-weight: 500;
            font-family: var(--font-sans);
            user-select: none;
            cursor: pointer;
            padding: 0px 25px;
            margin: 0px;
            transition: all 0.2s ease 0s;
            text-decoration: none;

            &:hover {
              color: var(--igs-button-fg-hover);
              background-color: var(--igs-button-bg-hover);
            }

            &:disabled {
              color: #fff;
              opacity: .5;
            }
          }
          .text {
            position: relative;
            z-index: 1;
            margin-left: 0px;
          }
        `}
      </style>
    </button>
  )
}

export default memo(Button)
