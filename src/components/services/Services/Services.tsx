import MagicBento from "@/components/reactbits/MagicBento/MagicBento";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { SERVICES } from "@/lib/content";
import styles from "./Services.module.css";

interface ServicesProps {
  withHeader?: boolean;
}

const Services = ({ withHeader = true }: ServicesProps) => {
  return (
    <section className="section" id="services">
      <div className="container">
        {withHeader && (
          <SectionHeader
            eyebrow="Flexible & Futuristic"
            title={
              <>
                Solutions <span className="text-gradient">Tailored for You</span>
              </>
            }
          />
        )}

        <div className={styles.bentoWrap}>
          <MagicBento
            cards={SERVICES}
            enableStars={false}
            enableSpotlight={false}
            enableBorderGlow={false}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
