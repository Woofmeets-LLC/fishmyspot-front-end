import styles from './SubWireFrameSection.module.css';

const SubWireFramesSection = () => {
  return (
    <section className='container'>
      <div className={styles['wireframe-container']}>
        <div className="grid grid-cols-12 md:gap-8">
          <div className={styles['wireframe-content-area']}>
            <div className={styles['wireframe-content-wrapper']}>
              <h1 className={styles['wireframe-content-heading']}>Easy Way To Create High fidelity WireFrames</h1>
              <p className={styles['wireframe-content']}>Why Fish From FishMySpot’s Marketplace?  Our offerings of private ponds and lakes are under fished, secluded, private, and make for a great experience for the family or avid fisherman/woman who enjoy the thrill of fishing at new water holes. Specifically, parents can teach their children to fish without the hassle of crowds and long drive to public lakes. Plus, children are more likely to catch fish frequently at under-fished ponds and lakes than going to a public lake. And if kids catch fish, they will beg to return.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2">
            <iframe
              className='w-full h-[220px] sm:h-[240px] md:h-full'
              src="https://www.youtube.com/embed/DoA_D6tmo6o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubWireFramesSection;