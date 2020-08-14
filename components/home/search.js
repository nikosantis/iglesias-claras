import { useState, useCallback, memo } from 'react'
import { FiSearch } from 'react-icons/fi'
import Button from '../button'

function Search () {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setFocused(false)
  }, [])

  const handleSubmit = useCallback(
    async (evt) => {
      evt.preventDefault()
    },
    []
  )

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='box'>
          <span className='icon'>
            <FiSearch className='icon-search' />
          </span>
          <input
            name='Buscar'
            type='text'
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder='Buscar por Iglesia, Nombre o Ubicación'
            aria-label='Buscar'
          />
        </div>
        <Button role='submit' type='submit'>Buscar</Button>
      </form>
      <style jsx>
        {`
          .wrapper, form {
            display: flex;
            justify-content: center;
            position: relative;
            min-width: 1px;
            max-width: 100%;
          }
          .box {
            display: flex;
            align-items: center;
            width: 400px;
            border-radius: var(--igs-radius);
            border: 1px solid var(--igs-input-border);
            transition: border-color .15s ease,color .15s ease;
            margin-right: 5px;
            ${focused
              ? 'border-color: var(--igs-input-border-focus);'
              : ''
            }
          }
          .icon {
            display: flex;
            height: 2.5rem;
            align-items: center;
            border-right: 0;
            padding: 0 var(--igs-gap-half);
          }
          :global(.icon-search) {
            ${focused
              ? 'color: var(--igs-input-border-focus);'
              : 'color: var(--igs-input-border);'
            }
            transition: color .15s ease;
          }
          input {
            width: 100%;
            border: none;
            display: inline-flex;
            padding: 0 var(--igs-gap-half);
            ::placeholder {
              color: var(--igs-foreground);
              opacity: 0.5;
            }
            :focus {
              border: none;
              outline: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default memo(Search)
