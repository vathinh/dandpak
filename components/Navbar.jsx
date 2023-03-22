import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}></div>
      <Image src="/img/dpaklogo.png" alt="" width="160" height="69"/>
      {/* <div className={styles.callButton}>
        <Image src="/img/dpaklogo.png" width="32" height="32" />
      </div> */}
      {/* <div className={styles.texts}>
        <div className={styles.text}>Order Now</div>
        <div className={styles.text}>123456789</div>

      </div> */}

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Kho nguyen lieu</li>
          <li className={styles.listItem}>Nha may 1 - 2</li> 
          <li className={styles.listItem}>Kho thong minh</li>
          <li className={styles.listItem}>Khu chien</li>
         
          <li className={styles.listItem}>Khu keo</li>
          <li className={styles.listItem}>Khu thanh pham</li>
          <li className={styles.listItem}>Khu san xuat</li>




        </ul>
      </div>
    </div>
  )
}

export default Navbar