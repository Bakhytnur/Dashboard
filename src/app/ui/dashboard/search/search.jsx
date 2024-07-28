import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'

const search = ({placeholder}) => {
  return (
    <div className={styles.container}>
        <MdSearch placeholder="Search for a user" />
        <input type='text' placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default search