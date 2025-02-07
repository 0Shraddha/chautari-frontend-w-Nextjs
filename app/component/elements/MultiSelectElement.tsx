import styles from '../../styles/form.module.css'

export default function FormMultiSelect() {

  return (
    <div className="col bg-white p-4" style={{ borderRadius: '8px'}}>
        <label htmlFor="category" className={styles.label}>Category</label>
      <select className={`${styles["form-control"]} form-select`} name="category" id="id_category">
        <option value="cafe">Cafe</option>
        <option value="restaurant">Restaurant</option>
        <option value="banquet">Banquet</option>
      </select>
    </div>
  );
}
