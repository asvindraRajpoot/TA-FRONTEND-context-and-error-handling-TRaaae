import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import { SectionOneErrorBoundary } from "./SectionOneErrorBoundry";


function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <SectionOneErrorBoundary>
          <SectionOne />
          <SectionTwo />
          <Location />
        </SectionOneErrorBoundary>

      </div>
    </section>
  );
}

export default Main;
