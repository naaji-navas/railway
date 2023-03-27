import React from 'react'
import Image from 'next/image'
import ima_msn from '../../../../public/assets/images/ima_msn.png'
import cognosco from '../../../../public/assets/images/cognosco.png'
import undraw_img from '../../../../public/assets/images/undraw_img.png'
import org_1 from '../../../../public/assets/images/org_1.png'
import org_2 from '../../../../public/assets/images/org_2.png'
import org_3 from '../../../../public/assets/images/org_3.png'
import banner from '../../../../public/assets/images/banner.png'
const Landing = () => {


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: '8px 2px',
    width: '95%',
    border: '2px solid #C9C9C9',
    display: 'flex',
    borderRadius: '50px',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '20px',
  },
  headerImg: {
    width: '50px',
    marginLeft: '8px',
  },
  headerImgLast: {
    width: '150px',
    flex: 2,
  },
  headerButton: {
    fontSize: '12px',
    padding: '12px 24px',
    borderRadius: '50px',
    marginRight: '20px',
  },
  banner: {
    width: '100%',
    backgroundImage: `url(${banner})`,
    height: '60vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '24px',
  },
  bannerDiv: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center',
  },
  bannerButton: {
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'black',
    padding: '12px 32px',
    marginLeft: '24px',
    borderRadius: '15px',
    border: 'none',
  },
  common: {
    padding: '28px',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  aboutDiv: {
    display: 'flex',
    flexDirection: 'row',
    margin: '16px 0px',
    flex: 1,
  },
  map: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0EEFF',
  },
  mapDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  mapContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    marginTop: '12px',
    justifyContent: 'space-between',
  },
  chart: {
    p: {
      borderRadius: '15px',
      padding: '12px 54px',
      backgroundColor: '#F0EEFF',
      marginBottom: '20px',
      textAlign: 'start',
    },
  },
  organisers: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0EEFF',
    paddingBottom: '60px',
  },
  footer: {
    padding: '32px',
    textAlign: 'center',
    backgroundColor: '#6C63FF',
    color: 'white',
  },
};
  return (
    <div>
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Image src={ima_msn} alt="ima" />
          <Image src={cognosco}  alt="ima" />
        </div>
        <button>Register</button>
      </div>
    </div>
    <div id="banner" className={styles.banner}>
      <div>
        <h1>Cognosco</h1>
        <button>Register</button>
      </div>
    </div>
    <div className={`${styles.about} ${styles.common}`}>
      <h1>About the Event</h1>
      <div>
        <p>
          <b>All winners have secrets dont they ?</b><br />
          And these little secrets makes the difference between an aspirant and a winner. So the ima msn Kerala brings to u all thats required to secure a seat in medical Colleges across the state .
          <br />
          Cognosco is a single day event encompassing sessions by previous year toppers sharing their little cheat codes to  victory ,Dr Arun B Nairs ace session on Psychological stress management and a mock neet examination to prep you up for your Big day. See you in medical&nbsp;College.</p>
        <img src={undraw_img} alt="undraw"/>
      </div>
    </div>
    <div className={`${styles.map} ${styles.common}`}>
      <h1>Centres</h1>
      <div className={styles.mapContainer}>
        <div>
          <p>Gmc Trivandrum <b>(700)</b> slots</p>
        </div>
        <div>
          <p>Gmc Ernakulam&nbsp;<b>(300)</b> slots</p>
        </div>
      </div>
    </div>
    <div className={`${styles.chart} ${styles.common}`}>
      <h1>Programme Details</h1>
      <br />
      <p>8 to 8.30 inauguration</p>
      <p>8.30 to 9.30 talk by toppers</p>
      <p>9.30 to 10 talk by psychiatrist</p>
      <p>10.30&nbsp;to&nbsp;1.30&nbsp;exam</p>
    </div>
    <div className={`${styles.organisers} ${styles.common}`}>
      <h1>Centres</h1>
      <div className={styles.organisersContainer}>
        <div>
          <Image src={org_1} alt="org1" />
          <p>Vishwanath Kannan</p>
        </div>
        <div>
          <Image src={org_2} alt="org2" />
          <p>Vishwanath Kannan</p>
        </div>
        <div>
          <Image src={org_3} alt="org3" />
          <p>Vishwanath Kannan</p>
        </div>
      </div>
    </div>
    <div id="footer" className={styles.footer}>IMA MSN Kerala</div>
  </div>
</div>


  )
}

export default Landing