import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' placeholder='title' name='title' required />
        <select name='category' id='category'>
          <option value='general'>Choose a category</option>
          <option value='mouse'>Mouse</option>
          <option value='phone'>Phone</option>
          <option value='computer'>Computer</option>
        </select>
        <input type='number' placeholder='price' name='price' />
        <input type='number' placeholder='stock' name='stock' />
        <input type='text' placeholder='color' name='color' />
        <input type='text' placeholder='size' name='size' />
        <textarea name='desc' id='desc' rows='16' placeholder='Description'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage