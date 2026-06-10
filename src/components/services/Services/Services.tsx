import { FiArrowUpRight } from "react-icons/fi";
import StarBorder from "@/components/reactbits/StarBorder/StarBorder";
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
            subtitle="A full-stack agency partner - from first prototype to production scale, across every layer of your product."
          />
        )}

        <div className={styles.bento}>
          {SERVICES.map((service) => (
            <StarBorder
              key={service.id}
              as="div"
              color="#38bdf8"
              speed="7s"
              thickness={2}
              className={`${styles.cell} ${
                service.span ? styles[service.span] : ""
              }`}
            >
              <div className={styles.cardBody}>
                <span className={styles.icon}>{service.icon}</span>
                <div className={styles.cardText}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.desc}>{service.description}</p>
                </div>
                {service.cta && (
                  <a href={service.cta.href} className={styles.cardCta}>
                    {service.cta.label}
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
